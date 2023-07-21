import express from 'express';


import path from 'path';
const __dirname = path.resolve();

// import apiv1Router from './apiv1/index.mjs'
import apiv1Router from './apiv1/indexV1.mjs'
import apiv2Router from './apiv2/indexV2.mjs'



const app = express();
app.use(express.json()); // body parser
// app.use(cors())



app.use("/api/v1", apiv1Router)
app.use("/api/v2", apiv2Router)

const port=process.env.PORT || 3002

app.listen(port,()=>{
    console.log("listning the port")
})