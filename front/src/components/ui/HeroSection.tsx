import { Link } from "react-router-dom";

const HeroSection = () => {
    return (
        <div className="text-white w-full  flex flex-col pt-4  md:flex-row pt-10 md:min-h-[500px]">
            <div className="md:flex-1  flex justify-center md:items-start items-center flex-col space-y-5" >
                <p className="text-white text-3xl md:text-5xl font-extrabold md:px-24  text-center md:text-start">
                  Enhance your power with Flow IA Tools
                </p>
                <p className="text-white text-xl md:text-2xl  md:px-24   text-center md:text-start ">
                    with this tool you can create your own IA
                </p>
                <Link to="/ai" className="md:px-24">
                    <button className="w-28 p-2 rounded-md font-semibold text-black bg-white  hover:bg-slate-100 transition duration-150 ">
                        Try it
                    </button>
                </Link>
            </div>
            <div className="mt-4 md:mt-0 md:flex-1  md:flex md:justify-center md:items-center">
                <img alt="logo" src="/ogo.jpg" className="object-fill w-60 h-auto mx-auto md:m-0"  />
            </div>
       </div>
    )
};

export default HeroSection ;