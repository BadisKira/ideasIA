import {Link} from "react-router-dom";
import HamburgerBtn from "./HamburgerBtn";
import {useEffect, useState} from "react";
const Header = () => {
    const [open,setOpen] = useState<boolean>(false);
    const [fixedNavBar,setFixedNavBar] = useState(window.scrollY>10)
    useEffect(() => {
        const handleScroll = () => {
            setFixedNavBar(window.scrollY > 10)
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

        return (
            <div className={`${fixedNavBar ?  " fixed bg-gray-500 h-12 transition-all duration-200 " : " absolute h-16 transition-all duration-75 "} top-0  w-full sm:px-12 px-6 mx-auto  flex items-center text-white   z-50   justify-between`}>
                <Link className={""} to={"/"}>
                    <div className={"flex items-center mx-6  rounded-xl z-50"}>
                        <img src={"/vite.svg"} alt={'Logo'} />
                        <span>My IA Application</span>
                    </div>
                </Link>
                <nav className={"hidden sm:flex"}>
                    <Link to={"#"} className={"header-link"}>link 1 </Link>
                    <Link to={"#"} className={"header-link"}>link 1 </Link>
                    <Link to={"#"} className={"header-link"}>link 1 </Link>
                    <Link to={"#"} className={"header-link"}>link 1 </Link>
                    <Link to={"#"} className={"header-link"}>link 1 </Link>
                </nav>

               <div className={"flex sm:hidden"}>
                 <div className={"z-40"}>
                     <HamburgerBtn color={"white"} open={open} setOpen={setOpen} />
                 </div>
               </div>

                {
                    open &&
                    <nav className={" flex sm:hidden bg-black w-full pt-24 pl-12 space-y-4 flex-col z-20 absolute top-0 left-0 h-[500px]"}>

                        <Link to={"#"} className={"header-link w-64"}>link 1 </Link>
                        <Link to={"#"} className={"header-link w-64"}>link 1 </Link>
                        <Link to={"#"} className={"header-link w-64"}>link 1 </Link>
                        <Link to={"#"} className={"header-link w-64"}>link 1 </Link>
                        <Link to={"#"} className={"header-link w-64"}>link 1 </Link>

                    </nav>
                }



            </div>
        )
}
export default Header;