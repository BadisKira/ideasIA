import { useState } from "react";
import TextArea from "../ui/TextArea";

type PostProps = {
    post: string,
    setPostInfo:(p:string) => void
}

const Post:React.FC<PostProps> = ({post , setPostInfo }) => {
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setPostInfo(e.target.value);
    }

    return (
        <div className="block ">
            <div className="text-lg text-white pt-10">Post information</div>
            <TextArea value={post} handleChange={handleChange} setValue={setPostInfo} />
        </div>

    )
}

export default Post; 