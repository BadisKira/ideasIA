/**
 *
 * import React, {useEffect, useState} from "react";
 * import {AiOutlineLoading3Quarters, AiOutlineSend} from "react-icons/ai";
 * import {MessageType, useTextGenerationContext} from "../../context/TextGenetationContext.ts";
 * import axios, { AxiosResponse} from "axios";
 * const InputOld:React.FC = () => {
 *     const context = useTextGenerationContext();
 *     const [message,setMessage]=useState<MessageType>({role:"user",content:""});
 *     const {loading,setLoading,messages,setMessages} =context;
 *
 *     const handleSend = async  () => {
 *         if(context.loading || message.content === ""){
 *            return;
 *         }
 *         setLoading(true)
 *         setMessages(messages === undefined ?[message] : [...messages,message]);
 *     } ;
 *
 *     useEffect(()=>{
 *         const sendMessage = async () => {
 *             const generatedText:AxiosResponse<MessageType> = await axios.post("http://localhost:5000/text-generation",{
 *                 messages
 *             }) ;
 *             const data:MessageType = generatedText.data;
 *             console.log(data) ;
 *             setMessages(messages === undefined ? [data] : [...messages,data])
 *             setMessage({...message,content:""});
 *             setLoading(false);
 *         }
 *             if(messages[messages.length -1].role === "user" )
 *                 sendMessage();
 *     },[messages]);
 *
 *
 *
 *    return <div className={""}>
 *        <span className={"w-full h-16 flex py-2 px-1 relative"}>
 *            <input
 *                value={message.content}
 *                onChange={(e)=> {
 *                    setMessage({role: message.role, content: e.target.value})
 *                }}
 *                className={`w-full  rounded-md pl-2 pr-12`}
 *            />
 *            <button className={`
 *            absolute
 *            top-1/2
 *            -translate-y-1/2
 *            right-2
 *            bg-gray-500
 *            h-8
 *            w-8
 *            rounded-lg
 *            flex items-center justify-center
 *            active:scale-90
 *            `}
 *                    onClick={handleSend}
 *
 *            >
 *                {!loading ?
 *                    <AiOutlineSend className={"text-xl text-white"} /> :
 *                    <AiOutlineLoading3Quarters className={" animate-spin text-xl text-white"} />
 *                }
 *
 *            </button>
 *        </span>
 *    </div>
 * } ;
 *
 * export default InputOld;
 */