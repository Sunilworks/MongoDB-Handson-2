const { database } = require("../config/db")
// database.collection("collectionName")  //productStore.db <=> db.collection.insertOne
const employee=database.collection("employee")


const addProductInStore=async(req,res)=>{
    try{
        // const productDetails=req.body;
    const data=await employee.insertMany(
        [{
            "firstName": "John",
            "lastName": "Doe",
            "salary": "25000",
            "department": "HR",
            "lastCompany": "X",
            "lastSalary": "10000",
            "overallExp": "2",
            "contactInfo": "1234567890",
            "yearGrad": "2016",
            "gradStream": "CSE"
          },{
            "firstName": "Rohan",
            "lastName": "Jame",
            "salary": "30000",
            "department": "Technical",
            "lastCompany": "Y",
            "lastSalary": "15000",
            "overallExp": "1",
            "contactInfo": "1234567860",
            "yearGrad": "2015",
            "gradStream": "CSE"
          },{
            "firstName": "Jame",
            "lastName": "Doe",
            "salary": "35000",
            "department": "Accounts",
            "lastCompany": "Z",
            "lastSalary": "20000",
            "overallExp": "1",
            "contactInfo": "123567890",
            "yearGrad": "2019",
            "gradStream": "ECE"
          },{
            "firstName": "Sao",
            "lastName": "Avika",
            "salary": "30000",
            "department": "Sales",
            "lastCompany": "Y",
            "lastSalary": "15000",
            "overallExp": "2",
            "contactInfo": "1234567860",
            "yearGrad": "2015",
            "gradStream": "CSE"
          },{
            "firstName": "Jame",
            "lastName": "roh",
            "salary": "35000",
            "department": "Accounts",
            "lastCompany": "Z",
            "lastSalary": "15000",
            "overallExp": "2",
            "contactInfo": "123567890",
            "yearGrad": "2019",
            "gradStream": "EEE"
          },{
            "firstName": "Rohan",
            "lastName": "Jame",
            "salary": "30000",
            "department": "Technical",
            "lastCompany": "Y",
            "lastSalary": "15000",
            "overallExp": "1",
            "contactInfo": "1234567860",
            "yearGrad": "2015",
            "gradStream": "CSE"
          },{
            "firstName": "Jame",
            "lastName": "Doe",
            "salary": "35000",
            "department": "Accounts",
            "lastCompany": "Z",
            "lastSalary": "20000",
            "overallExp": "1",
            "contactInfo": "123567890",
            "yearGrad": "2019",
            "gradStream": "ECE"
          },{
            "firstName": "Sao",
            "lastName": "Avika",
            "salary": "30000",
            "department": "Sales",
            "lastCompany": "Y",
            "lastSalary": "15000",
            "overallExp": "2",
            "contactInfo": "1234567860",
            "yearGrad": "2015",
            "gradStream": "CSE"
          },{
            "firstName": "Jame",
            "lastName": "Doe",
            "salary": "35000",
            "department": "Accounts",
            "lastCompany": "Z",
            "lastSalary": "15000",
            "overallExp": "2",
            "contactInfo": "123567890",
            "yearGrad": "2019",
            "gradStream": "EEE"
          },{
            "firstName": "Rohan",
            "lastName": "Jame",
            "salary": "30000",
            "department": "Technical",
            "lastCompany": "Y",
            "lastSalary": "15000",
            "overallExp": "1",
            "contactInfo": "1234567860",
            "yearGrad": "2015",
            "gradStream": "CSE"
          },{
            "firstName": "Jame",
            "lastName": "Doe",
            "salary": "35000",
            "department": "Accounts",
            "lastCompany": "Z",
            "lastSalary": "20000",
            "overallExp": "1",
            "contactInfo": "123567890",
            "yearGrad": "2019",
            "gradStream": "ECE"
          },{
            "firstName": "Sao",
            "lastName": "Avika",
            "salary": "30000",
            "department": "Sales",
            "lastCompany": "Y",
            "lastSalary": "15000",
            "overallExp": "2",
            "contactInfo": "1234567860",
            "yearGrad": "2015",
            "gradStream": "CSE"
          },{
            "firstName": "Jame",
            "lastName": "Doe",
            "salary": "35000",
            "department": "Accounts",
            "lastCompany": "Z",
            "lastSalary": "15000",
            "overallExp": "2",
            "contactInfo": "123567890",
            "yearGrad": "2019",
            "gradStream": "EEE"
          }]
    )
    res.send({msg:"added successfully",data:data})
    }
    catch(err){
        res.send("error occurred",err)
    }
}
// const updatePriceOfSingleProduct=async(req,res)=>{
//     res.send({msg:"updated successfully",data:data})
// }

const ques3=async (req,res)=>{
    try{
        const data=await employee.find({"salary":{$gt:"30000"}}).toArray()
        res.send({msg:"salary greater than 30000",data:data})
    }
    catch(err){
        res.send("error occured",err)
    }
}

const ques4=async(req,res)=>{
    try{
        const data=await employee.find({"overallExp":{$gt:"2"}}).toArray()
        res.send({msg:"experience more than 2 years",data:data})
    }
    catch(err){
        res.send("error occurred",err)
    }
}

const ques5=async(req,res)=>{
    try{
        const data= await employee.find({"yearGrad":{$gt:"2015"},"overallExp":{$gt:"1"}}).toArray()
        res.send({msg:"year of experience more than 1 year and graduated after 2015",data:data})
    }
    catch(err){
        res.send("error occurred",err)
    }
}

const ques6=async(req,res)=>{
    try{
        const data=await employee.updateMany({"salary":{$gt:"70000"}},{$set:{"salary":"65000"}})
        res.send({msg:"salary updated from 70,000 to 65,000",data:data})
    }
    catch(err){
        res.send("error occurred",err)
    }
}

const ques7=async(req,res)=>{
    try{
        const data=await employee.deleteMany({"lastCompany":"Y"})
        res.send({msg:"deleted all the last company with Y ",data:data})
    }
    catch(err){
        res.send("error occurred",err)
    }
}

module.exports={addProductInStore,ques3,ques4,ques5,ques6,ques7}