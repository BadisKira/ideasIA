import TextArea from "../ui/TextArea";

type LetterType = {
    loading: boolean, 
    data: string,
    setData: (data:string)=>void,
    
}


const Letter:React.FC<LetterType> = ({loading,data,setData}) => {
    if (loading) {
        return (
            <div className="w-full my-4 border border-gray-200 rounded-lg h-32
                 bg-gray-600 dark:bg-gray-700 dark:border-gray-600 animate-pulse">
            </div>
        )
    }
    if (data === "")
        return (
            <div className="w-full my-4 border border-gray-200 rounded-lg  h-32
                 bg-gray-600 dark:bg-gray-700 dark:border-gray-600 ">
            </div>
        )
    return (
        <div className="block my-1 ">
            <div className="text-lg text-white pt-10">Post information</div>
            <TextArea value={data} setValue={setData} handleChange={()=>{}}/>
        </div>
    )
}; 
export default Letter;