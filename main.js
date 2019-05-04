"use strict"
let http=require("http");
const emoji=["😂",'😀','😅','🤓','😜','😎','🙂','😊','😐','😄','☹','😇','😒','🤔','😝','😊','😑','😶','😲','😰','😓','😱','😖','😌','😫','🙄','😑','😈','😵','🤧','🤑',"🤤"];
http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
    res.write(`<!doctype html><head><title>Infinite Emoji Test</title><meta name="viewport",content="width=device-width"/><style>body{background:linear-gradient( 90deg , rgb(191, 64, 64), rgb(204, 166, 51), rgb(128, 191, 64), rgb(64, 191, 128), rgb(64, 191, 191), rgb(64, 64, 191), rgb(191, 64, 149));}</head><body>`
    let interval=setInterval(()=>{res.write(emoji[Math.floor(Math.random()*emoji.length)]);},100);
    req.on('close',()=>{
        clearInterval(interval);
    });
}).listen(process.env.PORT||5000);
