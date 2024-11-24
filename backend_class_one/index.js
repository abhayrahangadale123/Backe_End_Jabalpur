console.log("holooooooooo");


// this file use in  How file create, read, delete, update, etc working in sync and asysnc



//1..................................................................sync......................................................
 
let fs = require("fs");
// console.log(fs);
fs.writeFileSync("index.html","Abhay ji Hello")
// let data = fs.readFileSync("index.html")
// console.log(data.toString());
// let remove = fs.unlinkSync("index.html");
// console.log(remove);

// update ke liye
fs.appendFileSync("index.html",",new msg kese ho ");

//2................................................................... async se ..............................................................


//1.......... create file
fs.writeFile("style.html","hello ji  asy" ,(err)=>{
    if(err) throw err
    console.log("file create");
    
})
//2.........fid data read
 fs.readFile("style.html",(err , data)=>{
    if(err) throw err
    console.log(data.toString());
});
//3.........update
fs.appendFile("style.html" ," update the file",(err,data3)=>{
    if(err) throw err
    
})
//4.......... delete 
// fs.unlink("style.html",()=>{})





 


