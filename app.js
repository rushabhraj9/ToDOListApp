const express = require('express');
const bodyParser = require('body-parser');
const app=express();
const date=require(__dirname+"/date.js");
var todol=["Buy Food","Eat Food"];
var workList=[];
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(express.static("public"));


app.get("/",function(req,res){
  let day=date.getDate();
  res.render("list",{ListTitle:day,NewAdd:todol});
});

app.post("/",function(req,res){
  if(req.body.list==="WorkList"){
    workList.push(req.body.newtodo)
    res.redirect("/work");
  }
  else{
  todol.push(req.body.newtodo);
  res.redirect("/");
}
});


app.get("/work",function(req,res){
  res.render("list",{ListTitle:"WorkList",NewAdd:workList});
});



app.listen(3000,function(){
  console.log("server started on port 3000");



});
