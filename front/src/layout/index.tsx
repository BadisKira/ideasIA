import {Outlet} from "react-router-dom";
import SideBar from "../components/ui/SideBar";
const Layout = () => {
        return (
            <div className={'h-full w-full relative'}>
                <SideBar />
                {/**
                 Chaud comment je vais gérer les espaces
                 */}
                <div className={"h-full sm:pl-96 pl-12"}>
                    <Outlet />
                </div>

            </div>
        )
} ;

export default Layout;