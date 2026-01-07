
const User = require("../models/user.js");


module.exports.renderUserSignupForm = (req ,res)=>{
    res.render("./users/signup.ejs");
}

module.exports.userSignup = async(req , res)=>{
   try{
    let {username , email ,password} = req.body;
    const newUser = new User({email , username});
    const registeredUser = await User.register(newUser ,password);

    console.log(registeredUser);
    req.login(registeredUser , (err)=>{
        if(err){
            return next(err);
        }
        req.flash("success" , "Welcome to Wanderlust !")
        res.redirect("/listing");
    })   
   }catch(err){
    req.flash("error" , err.message);
    res.redirect("/signup");
   }
 
}

module.exports.renderUserLoginForm = (req , res)=>{
    res.render("./users/login.ejs");
}


module.exports.userLogin =  async(req ,res)=>{

    req.flash("success" , "Welcome back to Wanderlust");
    res.redirect(res.locals.redirectUrl || "/listing")

}

module.exports.logout = (req ,res , next)=>{
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        req.flash("success" , "You logged out successfully!")
        res.redirect("/listing");
    })
}