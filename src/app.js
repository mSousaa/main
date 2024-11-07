const express = require("express");
const router = require("./router"); 
const app = express();

app.use(express.json()); 

app.use((req, res, next) =>{
    const token = req.headers.token || null;

    try{
      if(token !== "123")
        throw "Token inválido";
    }catch(e){
      return res.status(403).send("barrado" + e)
    }
    next()
})

app.use(router); 

app.get("/", (req, res) => {
  res.status(200).send("Olá, sousaaaaaa");
});


module.exports = app;