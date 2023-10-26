const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

require("./db/conn");
const Contact = require("./models/contact");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

const static_path = path.join(__dirname,"../public");
app.use(express.static(static_path));

app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.render("index");
})

app.post("/contact",async(req,res)=>{
    try{
        const contactMe = new Contact({
            name: req.body.name,
            email:req.body.email,
            message: req.body.message 
        })

        const contacted = await contactMe.save();
        res.status(201).render("index");
    }catch(error){
        res.status(400).send(error);
    }
})

app.listen(port,()=>{
    console.log(`Server is running at port number ${port}`);
})