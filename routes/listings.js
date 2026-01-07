const express = require("express");
const router = express.Router();


const wrapAsync = require("../utils/wrapAsync.js");
const {isLoggedIn , isOwner , validateListing} = require("../middlewares.js");


const listingController = require("../controllers/listing.js");
const multer = require("multer");
const {storage} = require("../cloudConfig.js");
const upload = multer({storage});




router.route("/")
.get( listingController.index )
.post( isLoggedIn , upload.single('listing[image]') ,validateListing , wrapAsync(listingController.createListing));


//creating route
router.get("/new" , isLoggedIn ,(req , res)=>{
 res.render("listings/new.ejs");
})


router.route("/:id")
.put(  isLoggedIn, isOwner,upload.single('listing[image]'), validateListing ,  wrapAsync(listingController.updateListing))
.delete( isLoggedIn , isOwner, listingController.destroyListing)
.get( listingController.showListing)


// edit 
router.get("/:id/edit" , isLoggedIn, isOwner,wrapAsync(listingController.editListing))



module.exports = router;