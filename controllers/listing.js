const Listing = require("../models/listing.js");




const NodeGeocoder = require("node-geocoder");

const geocoder = NodeGeocoder({
  provider: "openstreetmap",

  // REQUIRED by OpenStreetMap Nominatim
  userAgent: "MajorProject/1.0 (your-real-email@gmail.com)",
  email: "pankajpraja07@gmail.com",

  // Safety options
  timeout: 5000,
  formatter: null
});


module.exports.index = async(req , res)=>{
    const allListings = await Listing.find({});
    res.render("./listings/index.ejs" , {allListings});
  };


module.exports.createListing = async(req , res , next)=>{
   let url = req.file.path;
   let filename = req.file.filename;
   let newListing = new Listing(req.body.listing);
   newListing.owner = req.user._id;
   newListing.image = {url , filename};

  let geoData = [];

try {
  geoData = await geocoder.geocode(newListing.location);
} catch (err) {
  console.error("Geocoding failed:", err.message);
}

if (geoData.length > 0) {
  newListing.latitude = geoData[0].latitude;
  newListing.longitude = geoData[0].longitude;
}

   await newListing.save();
   req.flash("success" , "New listing created !");
   res.redirect("/listing");
     
   
};  

module.exports.editListing = async(req  ,res )=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);

    if(!listing){
        req.flash("error" , "Listing u are requested for , does not exist");
        return res.redirect("/listing");
    }
    
    let OriginalImageUrl = listing.image.url;
    OriginalImageUrl = listing.image.url.replace(
    "/upload",
    "/upload/w_250,h_150"
    );

    

    res.render("listings/edit.ejs" , {listing , OriginalImageUrl});
}

module.exports.updateListing = async (req , res , next)=>{
    let {id} = req.params;
    let listing =  await Listing.findByIdAndUpdate(id , {...req.body.listing});

    if(req.body.listing.location) {
        let geoData = [];

        try {
            geoData = await geocoder.geocode(req.body.listing.location);
        } catch (err) {
            console.error("Geocoding failed:", err.message);
        }

        if (geoData.length > 0) {
          listing.latitude = geoData[0].latitude;
          listing.longitude = geoData[0].longitude;
        }
    }

   
    if(typeof req.file !== "undefined"){
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = {url , filename};
    await listing.save();
    }
   
    req.flash("success" , " Listing updated !");
    res.redirect(`/listing/${id}`);
}

module.exports.destroyListing = async(req ,res)=>{
    let {id} = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success" , " Listing deleted !");
    res.redirect("/listing");
}

module.exports.showListing = async (req , res)=>{

    let {id} = req.params;
    const listing = await Listing.findById(id).populate({path :"reviews" , populate:{ path: "author"} }).populate("owner");
    if(!listing){
        req.flash("error" , "Listing u are requested for does not exist");
        return res.redirect("/listing");
    }
    res.render("listings/show.ejs" ,{listing}); 
}