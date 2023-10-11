
import {createImageVariation, generateImage} from "../openIA/openiaConfig.js";
export const imageGeneration =  async (req,res) => {
    const description = req.body.description ;
    try {
        const response = await generateImage(description);
        res.status(200).send(response.data[0]) ;
    }catch(e) {

        res.status(400).json('the request contains illegal words ');
    }

}

export const imageVariation = async (req,res)=>{
    const url = req.body.url;
    try {
        const response = await createImageVariation(url);
        res.status(200).send(response.data[0]) ;
    }catch(e) {
        res.status(400).json('the request contains illegal words ');
    }
}