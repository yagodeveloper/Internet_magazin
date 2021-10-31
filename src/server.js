const fs = require("fs")
const morgan = require("morgan")
const express = require("express")
const path = require("path")
const CookieParser = require("cookie-parser")
const { PORT } = require("../config")

const app = express()

app.listen(PORT,()=>console.log(`server localhost://${PORT} portida ishladi`))

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(CookieParser())
app.use(morgan("tiny"))
app.use("/public",express.static(path.join(__dirname,"public")))

fs.readdir(path.join(__dirname,"routes"),(err,files)=>{
    if(!err){
        files.forEach((file)=>{
            const routePath = path.join(__dirname,"routes",file)
            const Route = require(routePath)
            if(Route.path&&Route.router) app.use(Route.path,Route.router)
        })
    }
})
