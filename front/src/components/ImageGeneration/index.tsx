import React, {useEffect, useState} from "react";
import axios from "axios";
import {AiOutlineReload} from "react-icons/ai";
import Input from "../ui/Input.tsx";


type ImageType = {
    url:string
}
const Img:React.FC<ImageType> = ({url}) => {

    /*animate-spin*/
    // const [currentUrl,setCurrentUrl] = useState<string>(url);

    const [loading,setLoading] = useState(false)
    const handleReload = async () =>{
        if(url === "" ) return ;

        // faire une fonction pour reload l'image si elle nous plait pas
    try{
        setLoading(true)
        const response = await  axios.post('http://localhost:5000/image-generation/variation',{
            url
        }) ;
        console.log("New variation" ,response) ;
        setLoading(false)
    }catch (e) {
        console.log(e)
        setLoading(false)
    }

    }
    return(
        <div className={"my-2 mx-auto flex flex-col md:flex-row  md:max-w-md w-8/12     "}>
               <img  src={url} alt={""} className={"object-fill select-none"}/>
            {url !== "" && <div className={"flex md:items-end p-1 "} onClick={handleReload}>
                <AiOutlineReload  className={`bg-red-500 mx-1 w-6 h-6 rounded-full p-1 active:scale-90 hover:cursor-pointer
                ${loading && "animate-spin"}
                `}/>
            </div>}

        </div>
   )
} ;


const ImageGeneration = () => {
    const [loading,setLoading] = useState(false);
    const [data,setData] = useState<string>("")  ;
    const [description,setDescription] = useState<string>("");
    const addMessage = (prompt:string) => {
        setDescription(prompt);
    }
    useEffect(()=>{
        const handleSend = async ()=>{

            try {
                setLoading(true);
                const response  = await axios.post("http://localhost:5000/image-generation/",{
                    description
                }) ;
                setData(response.data.url)  ;
                setLoading(false);
            }catch (error) {
                if (axios.isAxiosError(error)) {
                    console.log(error.response);
                } else {
                    console.log(error)
                }
            }
        }
        if(description.length === 0) return;
        else handleSend();
    },[description])


    return(
        <div className={"w-10/12 space-y-1 mx-auto"}>
            <h2 className={`
                text-2xl 
                text-white
                pt-6
                
                
            `}>Image generation</h2>
            <Input  addMessage={addMessage} loading={loading}/>
            <div>
                <Img url={data}/>
            </div>
        </div>
    )


}
export default ImageGeneration ;