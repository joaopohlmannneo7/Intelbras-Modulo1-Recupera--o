import { useState } from "react";
 export const Details = () =>{
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

     const handleClick = () =>{
        if(games){
            const searchedGames = games.filter((item)=>{
                return search.toLowerCase() === '' ? item : item.title.toLowerCase().includes(search)
                
            })
            setSearch('')
            setGames(searchedGames)
        }
     }
     return(
      <div>
        {games.map((item)=>{
            return(
                <div>
                    
            <h2>{item.title}</h2>
               <img src={item.thumbnail}/>
               <p>{item.short_description}</p>
                </div>
            )
        })}
      </div>
     )
}
