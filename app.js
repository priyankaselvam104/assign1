var express=require('express');
var app=express();

app.get('/',function(req,res){
  res.sendFile(__dirname+'/index.html');
});

var port = process.env.PORT || 4000;

var server=app.listen(port,function(req,res){
    console.log("Catch the action at http://localhost:"+port);
});
