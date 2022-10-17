import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import GameCard from './assets/Card/gameCard'
import { Game } from './assets/Details'
import { Formulary } from './assets/Form'
import { Header } from './assets/Header'
import { BarraDeTarefas } from './assets/Main'
import { News } from './assets/News'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route element={ <App />}></Route>
      <Route path="/games/:id" element={[<Game/>, <Formulary/>]}> </Route>
        <Route path="*" element={[ <BarraDeTarefas/>]}/>
        <Route path="/news" element={[<News/>]} />
    </Routes>
    </BrowserRouter>
   
  </React.StrictMode>
)
