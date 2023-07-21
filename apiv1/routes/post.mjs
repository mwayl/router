import express from 'express'
import path from 'path'
let router=express.Router()
const __dirname = path.resolve();

router.get("/post/:userId/:postId",(req,res,next)=>{
    // console.log("reterive post which userid and postid same"+ new Date())
    // res.send("reterive post which userid and postid same")

    res.sendFile(path.join(__dirname,'postaddv1.html'))
})

router.get("/post/:userId",(req,res,next)=>{
    // console.log("reterive post which userid same"+ new Date())
    // res.send("reterive post which userid same")
    res.sendFile(path.join(__dirname,'postdeletev1.html'))
})

router.post("/post",(req,res,next)=>{
    console.log("post cerated"+ new Date())
    res.send("post cerated")
})

router.put("/post/:userId/:postId",(req,res,next)=>{
    console.log("update post which userid and postid same"+ new Date())
    res.send("update post which userid and postid same")
})

router.delete("/post/:userId/:postId",(req,res,next)=>{
    console.log("delete the post"+ new Date())
    res.send("delete the post")
})


export default router












// GET     /api/v1/post/:userId/:postId
// GET     /api/v1/posts/:userId
// POST    /api/v1/post
// PUT     /api/v1/post/:userId/:postId
// DELETE  /api/v1/post/:userId/:postId


