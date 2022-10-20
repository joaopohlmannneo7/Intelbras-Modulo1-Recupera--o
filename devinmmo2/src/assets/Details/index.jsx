import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import GameCard from "../Card/gameCard";
import {gameOptions } from "../Main/fetch";
import styled from "styled-components";
import { Slider } from "../slides";
import SistOp from "../System";
export const Game = () => {
  const {id } = useParams();
  const [item, setGame] = useState(null);
 
  const getGame = async (url) => {
    const res = await fetch(url, gameOptions);
    const data = await res.json();
    console.log(data);
    setGame(data);
  };
  useEffect(() => {
    
    const gameUrl = `https://mmo-games.p.rapidapi.com/game?id=${id}`;
    console.log(gameUrl)
    getGame(gameUrl)
  }, []);

  return (
    <div>
      {item && (
        <>
      
      <Box3>
      <h1 id="tel">{item.title} ({item.release_date})</h1>
      
       
      </Box3>
        <Slider item={item}/>
       <Box4>
        <div>
          <h2 id="title1">Gênero</h2>
          <p id="gen">{item.genre}</p>
        </div>
        <div>
          <h2 id="title2">Plataforma</h2>
          <p id="plat">{item.platform}</p>
        </div>
       <div>
        <h2 id="til">Descrição</h2>
            <p id="desc"  dangerouslySetInnerHTML={{__html: item.description}}></p>
          </div>
       </Box4>
        
       <Box2>
       <h4 id="title">Sistema Operacional</h4>
      
          <SistOp item={item}/>
       </Box2>
      
        
        </>
      )}
    </div>
  );
};

  export const Box = styled.div`
   max-width: 1000px;
  position: relative;
  margin: auto;

  img{
    display: flex;
    position: relative;
    left: -50px;
    width: 1000px;
  }

  .next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a grey background color */
.prev:hover,
 .next:hover {
  background-color: #f1f1f1;
  color: black;
}
  

  `
  export const Box2 = styled.div`
  
  border-radius: 5px;
  box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
  border: 1px solid rgba(0, 0, 0, 0.8);
  margin: 50px 0px 500px 20px;
    background-color:  #c2c0c0;
    width: 1770px;
    gap: 30px;
    height: 530px;
  font-size: 20px;
  position: relative;
  top:-200px;
  left:50px;

  #content{
    position: relative;
    left: 200px;
    top: -49px;
  }
  #title{
    position: relative;
    left: 9px;
  }
 
  `
  export const Box3 = styled.div`
  margin-top: 210px;
  margin-bottom: 20px;
  #rel{
    font-size: 50px;
    position: absolute;
    left: 850px;
    top: 90px;
  }

  #tel{
    font-size: 50px;
    position: absolute;
    left: 200px;
    top: 70px;
    
  }
  

  
  
  `
  export const Box4 = styled.div`
  
   
  #desc{
    position: relative;
    top: -260px;
    font-size: 20px;
    margin: 30px;
  }
  #til{
    position: relative;
    top: -280px;
    left:40px;
  }
  #title1{
    position: relative;
    top: -251px;
    left: 40px;
  }
  #title2{
    position: relative;
    top: -340.5px;
    left: 220px;
  }
  #gen{
 position: relative;
  top: -249px;
  left: 40px;
  font-size: 20px;
  }
  #plat{
    position: relative;
    top: -337.5px;
    left: 220px;
    font-size: 20px;
  }
  
  `