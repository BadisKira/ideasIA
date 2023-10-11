import React from "react";
import TextGeneration from "./components/TextGeneration";
import ImageGeneration from "./components/ImageGeneration";
import {Route, Routes} from "react-router-dom";
import Layout from "./Layout";
import Home from "./page/Home";
import MotivationLetter from "./components/MotivationLetter";
const App:React.FC = () =>{

    return (
        <div className={"bg-slate-800 min-h-screen"}>
        <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"ai"} element={<Layout />}>
                <Route path={"text"} element={<TextGeneration />}/>
                    <Route path={"image"} element={<ImageGeneration />} />
                    <Route path="motivation" element={<MotivationLetter />} />
            </Route>
        </Routes>

        </div>
    )
} ;
export default  App ;