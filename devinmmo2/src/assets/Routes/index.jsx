import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Game } from '../Details'
import { Formulary } from '../Form'
import { Header } from '../Header'
import { BarraDeTarefas } from '../Main'
import { News } from '../News'



export const RoutesApp = () =>{
    return(
        
        <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/games/:id" element={[<Game/>, <Formulary/>]}> </Route>
            <Route path="*" element={[ <BarraDeTarefas/>]}/>
            <Route path="/news" element={[<News/>]} />
        </Routes>
        </BrowserRouter>
       
      
    )
}