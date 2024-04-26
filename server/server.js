const express = require('express')
const { MongoClient } = require('Mongodb')
const cors = require('cors')
const { response } = require('express')

const app = express()
app.use(cors())
app.use(express.json())

const uri = "mongodb+srv://RASHMITHA:RASHMITHA@cluster0.83kbco0.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
client.connect();
const db = client.db("your_database_name");
const col = db.collection("your_collection_name");

app.get('/',(_request,response) => {
    response.send('This is a server')
})

app.post('/insert',(request, response) => {
    console.log(request.body);
    col.insertOne(request.body);
    response.send(request.body);
})



app.get('/check',(req,res)=>{
    async function find(){
      try{
        const result=await col.findOne({email:req.query.un})
        if(result == null)
        {
          res.send("FAIL")
        }
        else{
          if(req.query.pw === result.pw)
          {
            res.send("PASS")
          }
          else
          {
            res.send("FAIL")
          }
  
        }
        
      }
      finally{}  
    }
    find().catch(console.dir)
  })


app.listen(9099)
console.log("server started") //hi


