import express from "express" ;
import {imageGeneration , imageVariation} from "../controllers/image-generation.js";
const routerImageGeneration = express.Router();

routerImageGeneration.post("/", imageGeneration) ;
routerImageGeneration.post('/variation',imageVariation)

export default routerImageGeneration ;