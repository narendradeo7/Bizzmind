// requiring express 

const express = require("express");

const bodyParser =require("body-parser");

const ejs = require("ejs");

const lds = require("lodash");

const path = require("path");



const app = express();

// using ejs

const port = process.env.PORT || 3000;

// public static path for css and images 

const static_path =path.join (__dirname,"../public");
// we have static path by going one dir back 

// getting all the paths for views and partials 

const templates_path=path.join(__dirname,"../templates/views");


// setting views and partials for the dynamic page 

app.set("view engine","ejs");
app.set("views",templates_path);


// use of bodyParser to get data from the route 

app.use(bodyParser.urlencoded({extended:true}));

// making our express to use static css and images files 

app.use(express.static(static_path));




// routing starts 

// callback for home router 


app.get("/",(req,res)=>{
    res.render("home");
})


// listening to the port on the server 

app.listen(port,()=>{

    console.log(` app listening on port ${port}`)

    
})