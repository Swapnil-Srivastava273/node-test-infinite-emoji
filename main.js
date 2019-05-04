"use strict"
let http=require("http");
let emoji=["😂",'😀','😅','🤓','😜','😎','🙂','😊','😐','😄','☹','😇','😒','🤔','😝','😊','😑','😶',😲','😰','😓','😱','😖','😌','😫','🙄','😑','😈','😵','🤧','🤑',"🤤"]
http.createServer((req,res)=>{
   res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
   setInterval(()=>{res.write(emoji[Math.floor(Math.random()*emoji.length)])},100);
}).listen(process.env.PORT||5000);
