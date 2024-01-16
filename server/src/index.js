const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/getAllCurrencies", (req,res)=>{
  const nameURL ="https://openexchangerates.org/api/currencies.json?app_id=03d1bd343ae5489cb08ad0668a8d4f6e"

    

  try{
    const nameResponce = await axios.get(nameURL);
    const nameData = nameResponce.data;

    return res.json(nameData);

  } catch (err){
    console.error(err);
  }
});

app.listen(5000,() =>{
  console.log("SERVER STARTED")
});