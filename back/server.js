import express from "express" ;
import cors from "cors" ;
import bodyParser from "body-parser";
import dotenv from "dotenv";
import routerTextGeneration from "./routes/text-generation.js" ;
import {routerOpenIA} from "./openIA/openiaConfig.js";
import routerImageGeneration from "./routes/image-generation.js";

dotenv.config() ;
const app  = express() ;
app.use(cors()) ;
app.use(bodyParser.json()) ;


app.use('/text-generation',routerTextGeneration);
app.use('/image-generation',routerImageGeneration);


app.listen(process.env.PORT , ()=>{
    console.log("server listening to port " , process.env.PORT )

} )