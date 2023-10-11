import {Configuration}  from "openai" ;
import {OpenAIApi} from "openai";
import dotenv from "dotenv" ;
import express from "express" ;
import * as fs from "fs";
import axios from "axios";
dotenv.config() ;
export const routerOpenIA = express.Router() ;
const openIa = new OpenAIApi( new Configuration({apiKey:process.env.API_KEY}));


export const generateText = async (messages) => {
    try{
        const res = await openIa.createChatCompletion({
            model:"gpt-3.5-turbo",
            messages:messages
        });
        return res.data.choices[0] ;
    }catch (e) {
        return e.response ? e.response.data : e.message;
    }
}

export const generateImage = async (description) =>{
    try {
        // https:

        const image = await openIa.createImage({
            prompt:description,
            size:"1024x1024",
            response_format:'url'
        }) ;

        return image.data ;

    }catch (e) {
        console.error(e.response ? e.response.data : e.message);
        return e.response ? e.response.data : e.message;
    }
}





export const createImageVariation = async (url) => {

    const response = await axios.get(url, {
        responseType: 'arraybuffer'
    });
    console.log(response)

    const buffer = await response.buffer();
    console.log("this is the buffer" , buffer) ;
    try{
        /**
         * I have to create an image from the url or a buffer
         * */
        // from the url
        const image = await  openIa.createImageVariation({
            image:buffer ,
            size:"1024x1024",
            response_format:"url"
        });

        return image.data ;
    }catch (e) {
        console.error(e.response ? e.response.data : e.message);
        return e.response ? e.response.data : e.message;
    }
}
export default openIa;
