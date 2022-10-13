import React from "react";
import { CardDispositivo2 } from "../Card/style";
import { Link } from "react-router-dom";

export const Game = ({game})=>{
    return(
        <div>
             <CardDispositivo2>
             <button>
          
          <Link to={`/game/`}>clique aqui</Link>
      
       
          </button>
         
             </CardDispositivo2>
           
        </div>
   
    )
}
