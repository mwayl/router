import express from 'express'
import path from 'path'
let router=express.Router()
const __dirname = path.resolve();

router.get('/comment/:postId/:commentId',(req,res,next)=>{
    // console.log("the comment post of userid and same commentid of version 2"+new Date())
    // res.send("the comment post of userid and same commentid of version 2")

    res.sendFile(path.join(__dirname,'commentv2.html'))
})


router.get('/comment/:postId/:commentId',(req,res,next)=>{
    console.log("the comment post of userid and same commentid of version 2"+new Date())
    res.send("the comment post of userid and same commentid of version 2")
})

router.post('/comment',(req,res,next)=>{
    console.log("the comment post of version 2"+new Date())
    res.send("the comment post of version 2")
})

router.put('/comment/:postId/:commentId',(req,res,next)=>{
    console.log("the comment post of userid and same commentid of version 2"+new Date())
    res.send("the comment post of userid and same commentid of version 2")
})

router.delete('/comment/:postId/:commentId',(req,res,next)=>{
    console.log("the comment post is delete of version 2"+new Date())
    res.send("the comment post is delete of version 2")
})


export default router
