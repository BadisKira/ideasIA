import { generateText } from "../openIA/openiaConfig.js" ;
export const textGeneration = async (req,res) => {
    try {
        console.log(req.body.messages);
        const response= await generateText(req.body.messages) ;
        res.send(response.message) ;
    }catch (e) {
        res.send(e.message)
    }
} ;
