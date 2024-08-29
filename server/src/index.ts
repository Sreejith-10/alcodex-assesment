import express, {Application} from "express";
import cors from "cors";
import router from "route/authRoute.js";

const app: Application = express();

const PORT:number = 3000

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use("/auth",router)

app.listen(PORT,()=>{
    console.log(`Server Started on Port ${PORT}`);
})