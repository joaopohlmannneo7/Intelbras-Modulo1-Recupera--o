import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Details } from "../assets/Details";

import { Header } from "../assets/Header";
import { BarraDeTarefas } from "../assets/Main";
import { News } from "../assets/News";

const RoutesApp =  () =>{
    return(
        <BrowserRouter>
        <Header/> 
        <Routes>
            <Route path="/games/" element={[]}> </Route>
            <Route path="*" element={[ <BarraDeTarefas/>]}/>
            <Route path="/news" element={[<News/>]} />
        </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp