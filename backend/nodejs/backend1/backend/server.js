import express from 'express';
// import ('.env').config

const app=express();

const port=process.env.PORT || 3000;

const jokes=[
    {
        id:1,
        joke:'hi every one',
    },
    {
        id:2,
        joke:'im joke kid',
    }
]

app.get('/',(req,res)=>{
    res.send('server is ready');
});

app.get('/api/joke',(req,res)=>{
    res.json(jokes);
});

app.listen(port,()=>{
    console.log(
        `Server at http://localhost:${port}`
    );
});