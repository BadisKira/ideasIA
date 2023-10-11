import { useState } from "react";
import TextArea from "../ui/TextArea";

type PersonalProps = {
    personalInfo: string,
    setPersonalInfo: (p: string) => void
}



const Personal: React.FC<PersonalProps> = ({
    personalInfo ,
    setPersonalInfo
}) => {
    const handleChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        setPersonalInfo(e.target.value);
    }

    return (


        <div className="block ">
            <div className="text-lg text-white pt-10">Personal information</div>
            <TextArea value={ personalInfo} handleChange={handleChange}  setValue={setPersonalInfo}/>
        </div>

    )
};

export default Personal;