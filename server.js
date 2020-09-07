const express = require('express');
const app=express();
const hbs=require('hbs');


app.use(express.static(__dirname + "/views"));
app.get('/',(req,res)=>{
    let d=new Date().getDay(); console.log(d)
    let h=new Date().getHours(); console.log(h)

    if (d!==0 && d!==6 && h>=9 && h<=17) {
        console.log('valid date')
        res.sendFile(__dirname + "/views/Home.html");
    } else {
        res.sendFile(__dirname + "/views/errorPage.html");
    }

})



app.listen(3000, (err)=>{
if(err) console.log('error while runnig the server')
else console.log('server running on port 3000')


})
