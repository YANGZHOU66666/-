const http=require('http');
const server=http.createServer((req, res)=>{
    const method=req.method;
    console.log('method',method);
    const url=req.url;
    console.log('url',url);
    res.end("hello, Hamo");

});

server.listen(5000,()=>{
    console.log("server running at port 5000");
})