let express = require("express");
let app = express()

// post method me medilewere.........................
app.use(express.json())
// from ke liye midle were
app.use(express.urlencoded({extended:false})) 
// public css file ke liye middle were

app.use(express.static("public"))


// get for medilewere.............................
app.use((req, res, next) => {
   // res.send("me hu  middle_ware securty")
   next();
})


// app.get('/', (req, res) => {
//    res.send("Hellooooooo")
// })


app.post("/s", (req, res) => {
   console.log(req.body);
   res.send("posttttt");
});
 


// data send today topic........ 18-11-2024 ......... use in view ejs file



// Data send and resive get and post se :- get se risk hota hai becuse data show hota hai esliye post se send krte hai

app.set("view engine","ejs")
app.get('/', (req, res) => {
   res.render("four_method")
})

app.get('/user', (req, res) => {
   console.log(req.query);
   let {name , pass} = req.query
   
   
   res.send(`name : ${name} , pass : ${pass} This is Data of Get`);
   // res.send(" data.....send....help of GET..")
})
app.post('/user', (req, res) => {
   console.log(req.body);
  
   let {name , pass} = req.body
   res.send(`name : ${name} , pass : ${pass}   This is Data of Post`);

   // res.send(" data.....send....help of Post..")
})
 



app.listen(4000, () => {
   console.log("server create port numberrrrrr: 4000");

})
