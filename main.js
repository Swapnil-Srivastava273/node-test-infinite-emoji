"use strict"
let http=require("http");
http.createServer((req,res)=>{
   res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
   setInterval(()=>{res.write("😂")},100);
}).listen(process.env.PORT||5000);
