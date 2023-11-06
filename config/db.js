const {MongoClient} =require("mongodb")
const url="mongodb://127.0.0.1:27017";
const mongoserver=new MongoClient(url);

const connection= async ()=>{
try{
   await mongoserver.connect()
    console.log("connection is successfull")
}
catch(err){
    console.log(err,'error occurred')
}
}
// connection();

// const database=mongoserver.db("databaseName")
const database=mongoserver.db("Human_Resource");

module.exports={connection,database}