const { addProductInStore,ques3,ques4,ques5,ques6,ques7} = require('../controller/product_Controller');


const route=require('express').Router();

route.post("/addProductInStore", addProductInStore);  //get,post,put,patch,delete CRUD

// route.put("/updateSingleProductPrice", updatePriceOfSingleProduct)

route.get("/ques3",ques3)
route.get("/ques4",ques4)
route.get("/ques5",ques5)
route.get("/ques6",ques6)
route.get("/ques7",ques7)

module.exports=route;
