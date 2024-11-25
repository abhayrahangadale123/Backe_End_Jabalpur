let express = require("express");
let app  = express()
//  let bcrypt =   require("bcrypt")
let mongoose = require("mongoose");
const User = require("./Model/user");

// midle were json ka
app.use(express.json())

// from ke liye midle were
app.use(express.urlencoded({ extended: false }))

 
 
mongoose.connect("mongodb://127.0.0.1:27017/DataDase").then(()=>{
    console.log("db connect.. hiiiiii........... haiiiiiiiiiiii");
    
}).then((err)=>{
    console.log(err);
    
})


app.set("view engine", "ejs")

app.get("/",(req,res)=>{
    res.render("Home")
})


app.get("/create",(req,res)=>{
    res.render("singup")
})
app.get("/login",(req,res)=>{
    res.render("login")
})

// sing up ..............................................................................................................
app.post("/create",async (req,res)=>{
     let user = req.body;
     console.log(user," create kr rhaaaaaa   hiiiiiiiiiiiiiiiiiiiiiii");
     
    let data = await User.findOne({email:user.email})

    if(data){

        res.send("user jindaa haiii alredy aceeeeeeeeeee")
    }
    else{
        // let updatePass = await bcrypt.hash(user.password,10);
        let dbUser = new User(
            {

                firstName:user.firstName,
                lastName:user.lastName,
                email:user.email,
                // password:updatePass
                password:user.password
            }
        )
        dbUser.save();
        res.send('create ho gaya')
        // console.log(updatePass,"passsssssssssssssssss");
        
    }
}) 

// login.....................................................................................................................................

app.post("/login",async(req,res)=>{
    let loginData = req.body
    let data = await User.findOne({email:loginData.email})
    if(data){
        let vaildData = await loginData.password===data.password
        if(vaildData){
            res.send("loginnnnnnnnnnnn")
        }
        else{
            res.send("Invalid Passsssssssssssss")
        }
    }
    else{
        res.send("phle account create kroooo")
    }
})



app.listen(7000,(req,res)=>{
    console.log("server readyyyyy 7000");
    
})