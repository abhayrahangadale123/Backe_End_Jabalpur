
//.................................................... server create help of Node js ............................................

/*
const http = require("http");

const server = http.createServer((req, res) => {
   res.end("Server created successfully");
});

server.listen(8000, (req,res) => {
   console.log("Server is ready and listening on port 8000");
});

*/







//.............................................................server create help of Express.........................................

/*
get : server se data lane ke liye
post: server me data send krne ke liye
fatch/put:
delete:
*/


let express = require("express");
let app = express()

/*
//...................................... use : -- middleware for securty..........................................
app.use((req,res)=>{
   res.send("me hu  middle_ware securty")
  
   })
   
//................................................... static routing :......................

app.use((req,res,next)=>{
  // res.send("me hu * second middle_ware securty * , : - mujse bhi puch loo")
  next();
   
})
// static routing :......................
app.get("/",(req,res)=>{
  res.send("creat express server")
})

// ......................................................daynmic routing :......................
app.get("/:data",(req,res)=>{
  console.log(req.params);
  
  // res.send("This is dynmic routing")
  res.send(req.params.data);
})


app.get("/about",(req,res)=>{
  res.send(" About")
})
*/

// app.get("/:data",(req,res)=>{
//     let arr = [1,2,3,4,5,6,7,8,55,54,765,55,,1,1,52,1,]
//     let c=0;
//     console.log(req.params);
//    //  res.send(req.params.data);
//     for(let i=0;i<arr.length;i++){
//        if(req.params.data==arr[i])
//        c++;
//  }

//  res.send({c});
//  })



// ...........................................................Path Parameter.....................................................
   /*
   Type of Path parameter :-

   1.Path parameter
   2.query Parameter
   
   */



 //1....Path parameter................................................................................................

// app.get("/:data",(req,res)=>{
//    let arr = [1,2,3,4,5,6,7,4,8,55,54,765,55,,1,1,52,1,]
   
//    let {data} = req.params
//    let filterData = arr.filter((a)=>{
//       return a==data
//    })
//    console.log(req.params);
//    //   res.send(filterData);
  
//    // for(let i=0;i<filterData;i++){
//    //    res.send("Abhay")
//    // }
//    let name = filterData.map(()=>{
//       return "abhay"
//    })
 
//    // res.send(name)
//    res.send(name.toString())

// })



//2............... query Parameter ,use in path individual(personal) serach for
  // exm:- http://localhost:4000/search?firstName=Arjun&&LastName=Rahangadale100 ,niche vale code ko is url se run hoga 


app.get("/search",(req,res)=>{
  console.log(req.query);

  let{firstName,LastName} = req.query;
  res.send(`${firstName}  ${LastName}`)
  
})
app.listen(4000,()=>{
  console.log("server create port number : 40000");
  
})

// Template.......................................................  Ejs file hendle   .......................................................

let arr = [1,2,3,4,5,6,7,8,9]
app.set("view engine","ejs")
app.get("/",(req,res)=>{
  let random_data = Math.floor(Math.random()*10+1) ;
  res.render("index",{random_data,arr})
})
app.get("/new",(req,res)=>{
    
  res.render("new")
})



