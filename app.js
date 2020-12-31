const express = require("express");
const app = express();
const fs = require("fs");
// bodyParser : request body를 json 형식으로 변환
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
// JS Class Example
let MyClass = require('./public/myClass');
oop = new MyClass('oop','object oriented programming');
oop.printInfo();
oop.description();

oop.setName('class');
oop.printInfo();

console.log(oop.getDescription());

app.get('/', function(req, res){
    fs.readFile('./public/test.html' , function(error,data){
        if(error){
            console.log(error);
        }
        else{
            res.writeHead(200,{'Content-Type':'text/html'});
            res.end(data);
        }
    })
})

app.post('/api/post', function(req,res){

})

//AJAX GET METHOD
app.get('/api/get',function(req,res) {
    var data = req.query.data;
    console.log('GET Parameter = ' + data);
    var result = data + ' Success';
    console.log(result);
    res.send({result:result});
});

//AJAX POST METHOD
app.post('/api/post', function(req, res){
    var data = req.body.data;
    console.log('POST Parameter = ' + data);
    var result = data + ' Success';
    console.log(result);
    res.send({result:result});
});

// Login Response METHOD
app.post('/api/login', function(req,res){
    let ID=req.body.id;
    let PW=req.body.pw;
    console.log(ID);
    console.log(PW);
})

app.listen(5005, () =>{
    console.log('Example app listening an port 5005! : 127.0.0.1:5005');
})
