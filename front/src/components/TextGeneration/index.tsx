import React, { useState} from "react";
import Input from "../ui/Input";
import axios from "axios";

type MessageType = {
    role: "system" | "user" | "assistant",
    content: string
};


const TextGeneration:React.FC = () => {

    const [loading,setLoading] = useState<boolean>(false);
    const [messages,setMessages] = useState<Array<MessageType> | undefined>();
    const sendMessageToAi = async (prompt :string ) => {
        if(prompt === "" ) return;
        const msgToSend:MessageType = {role:"user" , content:prompt};
        const updatedMessages = messages === undefined ? [msgToSend] : [...messages,msgToSend]
        setMessages(updatedMessages);
        setLoading(true)
        const response = await axios.post("http://localhost:5000/text-generation",{
            messages:updatedMessages
        });

        const {data} = await response;
        setLoading(false);
        setMessages(prev=>{
            if(prev !== undefined)
                return [...prev, data]
        });

    }

      const DisplayedMessages = () => {
        if(messages === undefined )
                  return <div className={"px-12 py-4 bg-slate-700 font-semibold text-white"}>Empty discussion</div>
              else
                  return (
                      <div className={"space-y-1"}>
                          {messages.map((message,index)=>{
                              if(message.role === "system")
                                  return "";
                              return (
                                  <div key={index}
                                       className={`${index % 2 === 0 ? 'bg-slate-900':'bg-slate-700'} p-6 `}>
                                      <span className={"font-bold text-white text-lg "}>{message.role}</span>
                                      <div
                                            className={"font-semibold text-white text-md"}
                                      >
                                          {message.content}
                                      </div>
                                  </div>
                              )
                          })}
                      </div>
                  )
          };


    return (
        <div className={"w-10/12 space-y-1 mx-auto "}>
            <div className={'flex items-center justify-between'}>
                <h2 className={`
                        text-2xl 
                        text-white
                        pt-6
                    `}>Text generation</h2>
                <div className={"flex space-x-3"}>
                    <button className={"rounded-md font-semibold bg-slate-500 color-white px-4 py-1 active:scale-90 text-white"} >Clear</button>
                    <button className={"rounded-md font-semibold bg-slate-500 color-white px-4 py-1 active:scale-90 text-white"} >history</button>
                </div>
            </div>

            <Input loading={loading} addMessage={sendMessageToAi}  />
            <div className={"  pt-12 pb-6"}>
                {DisplayedMessages()}
            </div>

        </div>

    )

};

export default TextGeneration;