var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public')); // ← adjust
app.use(express.static(__dirname + '/public/images/skills')); 

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
})

app.listen(process.env.PORT||5000, function() {
     console.log('listening'); 
});