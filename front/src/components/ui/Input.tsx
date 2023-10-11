import {useRef, useState} from "react";
import {AiOutlineLoading3Quarters, AiOutlineSend} from "react-icons/ai";

interface InputProps {
    loading:boolean,
    addMessage:(message:string)=>void,
}

const Input = (props : InputProps)=>{

    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const [prompt,setPrompt] = useState("");
    const {loading , addMessage} = props;
    const empty =""

    return (
        <div className={""}>
       <span className={"w-full h-16 flex py-2 px-1 relative "}>
           <textarea
               ref={textAreaRef}
               value={prompt}
               className={`w-full resize-none rounded-md pl-2 pr-12 pt-4 text-md h-14`}
               /*text-lg == 18px */
               onChange={(e)=> {
                   setPrompt(e.target.value);
               }}
               onScroll={()=>{
                   if(textAreaRef.current !== null) {
                      textAreaRef.current.className = 'w-full resize-none rounded-md pl-2 pr-12 pt-3 text-lg h-24 '
                   }
               }}
           >
           </textarea>

           <button className={`absolute
           top-9
           -translate-y-1/2
           right-2
           bg-gray-500
           h-8
           w-8
           rounded-lg
           flex items-center justify-center
           active:scale-90
           `}
                   onClick={()=>{
                        addMessage(prompt)
                       setPrompt(empty)
                   }}
           >

             {
                 !loading ?
                   <AiOutlineSend className={"text-xl text-white"} /> :
                   <AiOutlineLoading3Quarters className={" animate-spin text-xl text-white"} />
             }
           </button>
       </span>
        </div>
    )
};

export default Input ;