import express from "express";


const PORT = process.env.PORT ?? 3000
const app = express()


app.get('/', (req,res)=>{
    res.send('<h1>Express</h1>')
})

app.listen(PORT, ()=> {
    console.log(`Server started on ${PORT}`)
})