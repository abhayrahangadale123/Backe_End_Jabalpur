let express = require("express");
let app  = express()
 let bcrypt =   require("bcryptjs")
let cors = require("cors")
app.use(cors())
let jwt = require("jsonwebtoken")
let mongoose = require("mongoose");
const User = require("./Model/user");

// midle were json ka
app.use(express.json())

// from ke liye midle were
app.use(express.urlencoded({ extended: true }))

 
 
mongoose.connect("mongodb://127.0.0.1:27017/DataDase").then(()=>{
    console.log("db connect.. hiiiiii........... haiiiiiiiiiiii");
    
}).then((err)=>{
    console.log(err);
    
})


app.set("view engine", "ejs")

app.get("/",(req,res)=>{
    console.log("rrrrrrrrrrrrrrrrrrrrrrrrrrr");
    
    res.render("Home")
})


// app.get("/create",(req,res)=>{
//     res.render("singup")
// })
// app.get("/login",(req,res)=>{
//     res.render("login")
// })


 

 

// sing up ..............................................................................................................
app.post("/create",async (req,res)=>{
     let user = req.body;
     console.log(user," create kr rhaaaaaa   hiiiiiiiiiiiiiiiiiiiiiiiii");
     
    let data = await User.findOne({email:user.email})

    if(data){

        res.send("user jindaa haiii alredy aceeeeeeeeeee")
    }
    else{
        let updatePass = await bcrypt.hash(user.password,10);
        let dbUser = new User(
            {

                firstName:user.firstName,
                lastName:user.lastName,
                email:user.email,
                password:updatePass,
                // password:user.password,
                role:user.role||"user"
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
        let vaildData = await bcrypt.compare(loginData.password , data.password)  
        if(vaildData){
            let token = jwt.sign({email:data.email,role:data.role},"rrtfjfuyftyrfhftydfyddgrdytdfyty");
            console.log(token,"tokennnnnnnnnnnnnnnnnnnnnnnnnnnnn");


            
            // res.send(`token=${token} loginnnnn=successfully`) // this is right.......
            res.send({token});
        }
        else{
            res.send("Invalid Passsssssssssssss")
        }
    }
    else{
        res.send("phle account create kroooo")
    }
})


function checkRole(role){
    return(req,res,next)=>{
        let token = req.headers.authorization;
        if(!token){
            return res.send("unauthorization user");
        }
        else{
           let decodeToken = jwt.verify(token,"rrtfjfuyftyrfhftydfyddgrdytdfyty");
       
           
           if(decodeToken.role!=role){
            return res.send("acesss denideeeee")
           }
           else{
            next();
           }
        }
    }
}

// tokan create and fillter data Admin ka ya user ka haiiiiiii

app.get("/admin",checkRole("admin"),(req,res)=>{
    res.send("admin accesss onlyyyy admin")
})
app.get("/user",checkRole("user"),(req,res)=>{
    res.send("user access onlyyyyy user")
})

app.listen(7000,(req,res)=>{
    console.log("server readyyyyy 7000");
    
})