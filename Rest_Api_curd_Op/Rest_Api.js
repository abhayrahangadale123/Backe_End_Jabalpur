let comments = [
    {
        id: 0,
        username: "abhay",
        discr: "keese hooooooooooooooooo"
    },
    {
        id: 1,
        username: "Badal",
        discr: " acha hu meeeeeeeeeeeeeeeeeeeeee"
    },
    {
        id: 2,
        username: "abhay",
        discr: "keese hooooooooooooooooo"
    },
    {
        id: 3,
        username: "Badal",
        discr: " acha hu meeeeeeeeeeeeeeeeeeeeee"
    },
    {
        id: 4,
        username: "abhay",
        discr: "keese hooooooooooooooooo"
    },
    {
        id: 5,
        username: "Badal",
        discr: " acha hu meeeeeeeeeeeeeeeeeeeeee"
    }
]

let dummy = comments;


let express = require("express");
let app = express()
let methodOverride = require("method-override");
app.use(methodOverride("_method"));




// post method me medilewere.........................
app.use(express.json())
// from ke liye midle were
app.use(express.urlencoded({ extended: false }))
// public css file ke liye middle were

app.use(express.static("public"))







app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.send("hellooo welcome")
})
app.get('/comment', (req, res) => {
    res.render("maindata", { comments })
})

app.get("/comment/new/:id", (req, res) => {
    let { id } = req.params
    let data = comments.find((a) => {
        return a.id == id
    })
    res.render("individual", { data })
})

// editt
app.get("/comment/edit/:id", (req, res) => {
    let { id } = req.params
    let EditData = comments.find((a) => {
        return a.id == id
    })
    res.render("Edit", { EditData })
})

// update 

app.patch("/comment/edit/update/:id", (req, res) => {

    let { id } = req.params

    let olddata = comments.find((a) => {
        return a.id == id
    })

    let { username, discr } = req.body;
    olddata.username = username;
    olddata.discr = discr;
    res.redirect("/comment");
    console.log(username, discr, id);

})


/// removeeeee

app.delete("/comment/remove/:id",(req,res)=>{
    let {id} = req.params
    //  comments=comments.filter((a)=>{
    //     return a.id!=id
    // })

    let newdata=comments.filter((a)=>{
        return a.id!=id
    })
     
    comments=newdata
    
    res.redirect("/comment")
})

// all data privious return 

app.get("/comment/all",(req,res)=>{
    comments=dummy;
    res.redirect("/comment")
})




app.get("/comment/form", (req, res) => {
    res.render("fromReast")
})
app.post("/comment", (req, res) => {
    let { username, discr } = req.body;
    
    comments.push({ username, discr, id:comments.length })
    res.redirect("/comment")
})





app.listen(4000, () => {
    console.log("server create port number : 40000");

})