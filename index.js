const express=require("express")
const cors =require("cors")

const app= express()

var user="vk"
var pass=123
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.post("/login",(req,res)=>{
    console.log(req.body.uName)
    if(req.body.uName===user && req.body.uPass==pass){
        res.send(true)
    }
    else{
        res.send(false)
    }
    
}
)

app.listen(5000,()=>{
    console.log("server startedcd ")
})