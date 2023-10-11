import {createContext, useContext} from "react";

interface imageGenerationContextInterface {
    loading:boolean,
    prompt:string
}
export const imageGenerationContext = createContext<imageGenerationContextInterface | undefined>(undefined);
export const useTextGenerationContext = () => {
    const  context = useContext(imageGenerationContext)
    if(context === undefined)
        throw new  Error("undefined Context");

    else
        return context;
}