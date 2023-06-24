const express = require('express');

const app = express();

const cors = require('cors');

const dotenv = require('dotenv');

const bodyparser = require('body-parser');

app.use(cors());

app.use(bodyparser.json({limit: "50mb"}));

app.use(bodyparser.urlencoded({limit:"50mb", parameterLimit: 10000,extended:true}));

dotenv.config({path:"./.env"});

const port = process.env.port || 5000;

app.listen(port,() =>{
  console.log(`server started port ${port}`);

})

//get
app.get("/hello",(req,res)=>{
  res.send("server response");
})


// app.post("/hello2",(req,res) =>{
//   let {num1,num2} = req.body;
//   num1+=1;
//   num2+=2;
//   res.send({num1,num2});
// })

app.post("/hello2", (req,res) =>{
   let{num1,num2} = req.body;
   num1+=1;
   num2+=2;
   res.send({num1,num2});
});

app.post("/hello2/:name/:email",(req, res) => {
  let myname = req.params.name;
  let myemail = req.params.email;
  res.send({myname: myname, myemail: myemail});
})

app.get("/",(req, res) => {
  res.send("Hii");
})


