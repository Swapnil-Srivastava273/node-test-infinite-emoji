"use strict"
let http=require("http");
const emoji=["😂",'😀','😅','🤓','😜','😎','🙂','😊','😐','😄','☹','😇','😒','🤔','😝','😊','😑','😶','😲','😰','😓','😱','😖','😌','😫','🙄','😑','😈','😵','🤧','🤑',"🤤"];
http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
    let interval=setInterval(()=>{res.write(emoji[Math.floor(Math.random()*emoji.length)]);},100);
    req.on('close',()=>{
        clearInterval(interval);
    });
}).listen(process.env.PORT||5000);
