const mongoose = require("mongoose");
const initData = require("./data.js");

const Listing = require("../models/listing.js");

main()
.then((req ,res)=>{
    console.log("db connected !");
})
.catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');    
};


const initDB = async ()=>{

    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj , owner:"69439a18758ebb0d47415858"}));
    await Listing.insertMany(initData.data);

    console.log("dataSaved !");

}

initDB();