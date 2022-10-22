import styled from "styled-components";
import { useState } from "react";
import React from "react";
import { Link, Navigate } from "react-router-dom";
import GameCard from "../Card/gameCard";


export const BarraDeTarefas = () =>{

  const[search, setSearch] = useState('');
  const [games, setGames] = useState([])

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '2deb384b73msh2e19b7e734d003ep1f3daajsn31b111271b13',
      'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
    }
  };

  fetch('https://mmo-games.p.rapidapi.com/games', options)
.then(response => response.json())
.then(data=> {
 setGames(data)
 .catch(err => console.error(err))
   })
  
   return(

<div>
<BarraDeTarefas2>

          
            <form onSubmit={e => e.preventDefault()}>
            <h3>Busque o seu jogo</h3>
            <input  onChange={(e) => setSearch(e.target.value)} type="text" id="txtBusca" data-search placeholder="Buscar pelo nome do jogo"/>
           
            
        </form> 
       
        </BarraDeTarefas2>
<div>

    {games.
        filter((item) =>{
        return search.toLowerCase() === '' ? item : item.title.toLowerCase().includes(search)
      })
      .map((item)=><GameCard key={item.id} item={item}/>)}
    
    </div>
</div>
  
    
   )


  }
  
  export const BarraDeTarefas2 = styled.div`
 border-radius: 5px;
  box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
 
  display: inline-flex;
  transition: all 0.3s ease-out;
background:${({ theme }) => theme.background};
color: ${({ theme }) => theme.text};
position: relative;
left: 100px;
margin: 30px;
width: 1700px;
height:200px;



#txtBusca{
    width: 1380px;
    height: 34px;
    margin: -35px 80px 25px;  
     position: relative;
    top: 50px;
    left: 40px;
   
  }
  h3{
    position: relative;
    top: 30px;
    left: 120px;
    color:${({ theme }) => theme.text};
  }
  hr{
    width: 1500px;
height: 0px;

/* $secondaryLight */

border:  1px solid ${({ theme }) => theme.border};

/* Inside auto layout */

flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
position: relative;
left: 120px;
  }
  h1{
    padding: 20px;
    position: relative;
    left: 100px;
    color: ${({ theme }) => theme.text};
  }
`
export const C = styled.div`

 
margin: 0 auto;
    max-width: 1000px;
    display: inline-grid;
    position: relative;
    top: -500px;
    grid-template-columns: auto auto auto;
    width: 500px;
    height: 120px;
    margin: 35px;
    grid-auto-rows: auto;
    gap: 20px;
    font-family: sans-serif;
border-radius: 10px;

/* Inside auto layout */

flex: none;
order: 2;
flex-grow: 1;


`
export const Button = styled.div`
border-radius: 5px;
  box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
  border:  1px solid ${({ theme }) => theme.border};
  margin: 500px 0px 500px 20px;
    background-color:  ${({ theme }) => theme.background};
    width: 560px;
    gap: 30px;
    height: 550px;
  font-size: 20px;
  position: relative;
left:120px;

  img{
    width: 370px;

    position: absolute;
    left: 80px;
   top: 6px;

  }
p{
display: flex;
position: relative;
font-size: 15px;
top: 260px;
left: 10px;
top: 300px;
color:${({ theme }) => theme.text};
    
}
h2{
    position: relative;
    top: 260px;
    left:12px;
    top: 280px;
    color:${({ theme }) => theme.text};
    font-size: 21px;
}
a{
  position: absolute;
  top: 470px;
  left: 240px;
  border-radius: 5px;
  box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
  border: 1px solid${({ theme }) => theme.border};
  background: ${({ theme }) => theme.background};
  text-decoration: none;
  color:${({ theme }) => theme.text};
}
`