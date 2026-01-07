const Listing = require("../models/listing.js");
const Review = require("../models/review.js");

module.exports.createReview = async (req ,res)=>{

    let list = await Listing.findById(req.params.id);
    let newReview = await Review(req.body.review);

    newReview.author = req.user._id;
    console.log(newReview);

   list.reviews.push(newReview);

   await newReview.save();
   await list.save();
   req.flash("success" , " review added !")
   console.log("review saved !");

   res.redirect(`/listing/${list._id}`);
}




module.exports.destroyReview = async(req , res)=>{
   
    let {id , reviewId} = req.params;

    await Listing.findByIdAndUpdate( id , { $pull : {reviews :reviewId}});
    await Review.findByIdAndDelete(reviewId);
    req.flash("success" , " review deleted !")

    res.redirect(`/listing/${id}`);
}






