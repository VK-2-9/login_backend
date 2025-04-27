const express=require("express")
const cors =require("cors")

const app= express()
const userArr=[
    {
        uName:"vk",
        uPass:"123",
    },
    {
        uName:"ak",
        uPass:"456"
    }
]

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.post("/login",(req,res)=>{
    var result=false
    console.log(req.body.uName)
    userArr.forEach((item)=>{
        if(req.body.uName===item.uName && req.body.uPass==item.uPass){
            result=true
        }
        
    })
   res.send(result)
    
}
)

app.post("/signup",(req,res)=>{
    userArr.push({ uName: req.body.uName, uPass: req.body.uPass });
    res.send(true)
    console.log(userArr)
})

app.listen(5000,()=>{
    console.log("server startedcd ")
})