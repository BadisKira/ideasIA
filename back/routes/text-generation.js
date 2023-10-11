import express from "express" ;
import {textGeneration} from "../controllers/text-generation.js";
const routerTextGeneration = express.Router();
routerTextGeneration.post("/", textGeneration) ;
export default routerTextGeneration ;