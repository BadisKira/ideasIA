import {AiOutlineFileImage,AiOutlineFileText} from "react-icons/ai";
import {Link} from "react-router-dom";
import HamburgerBtn from "./HamburgerBtn.tsx";
import {ReactNode, useEffect, useState} from "react";


type RouteType= {
    icon:ReactNode,
    link:string,
    title:string
}

const routes:RouteType[] = [
    {
        icon:<AiOutlineFileText className={"text-2xl text-green-600 mr-2"}/>,
        link:"text",
        title:"Text Generation"
    } ,
    {
        icon:<AiOutlineFileImage className={"text-2xl text-orange-600 mr-2"}/>,
        link:"image",
        title:"Image Generation"
    },

]

const SideBar:React.FC  = ()=>{
    const [openMobileMenu,setOpenMobileMenu] = useState<boolean>(false);
    const [isMobile  , setIsMobile] = useState<boolean>(window.innerWidth < 640);

    useEffect(()=>{
        const changeToDesktopMenu = () => {
            setIsMobile(window.innerWidth < 640);
        };
        window.addEventListener('resize', changeToDesktopMenu);

        return () => {
                window.removeEventListener('resize', changeToDesktopMenu);
        };
    },[]);



    return (
        <div className={`
              fixed top-0 h-full bg-slate-900 z-20 delay-150 shadow-slate-800 shadow-2xl flex flex-col
              ${
                    isMobile  ?`w-[360px] ${openMobileMenu ? "left-0 transition-all duration-200" : "transition-all duration-200  -left-[320px]" }`
                        :   "w-96 left-0"
                }       
            `}
        >

            <div className={"sm:hidden absolute top-1 right-2"}>
                <HamburgerBtn  color={"white"} open={openMobileMenu} setOpen={setOpenMobileMenu}/>
            </div>

                <div className={" flex h-24 items-center pl-12   mb-12"}>
                    <img className={"mr-2"} src={"/vite.svg"} alt={'logo'} />
                    <span className={"text-xl text-white font-bold"}> MyIaApplication</span>
                </div>

                <div className={"pl-12  space-y-4 flex flex-col"}>
                    {routes.map((route) =>(
                        <Link to={"/ai/"+route.link}  key={route.link}>
                            <div className={` pl-6 flex items-center sm:w-72  w-64 h-14 border border-solid border-white rounded-xl active:scale-90 hover:bg-gray-700 cursor-pointer transition duration-100 `}>
                                {route.icon }
                                <span className={"text-lg text-white"}>{route.title}</span>
                            </div>
                        </Link>
                    ))
                    }
                </div>

            <button className={"mt-auto mx-auto mb-6 w-48 py-2 rounded border border-solid text-white hover:text-black border-white bg-slate-900 hover:bg-white transition duration-200 "}>
                Go back
            </button>
        </div>

        )
} ;

export  default SideBar;