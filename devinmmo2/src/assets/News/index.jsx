import { useState } from "react";
import { BarraDeTarefas2 } from "../Main";
import { C } from "../Main";
import { Button } from "../Main";
export const News = () =>{
    const[search, setSearch] = useState('');
  const [news, setNews] = useState([])

  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2deb384b73msh2e19b7e734d003ep1f3daajsn31b111271b13',
		'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
	}
};

fetch('https://mmo-games.p.rapidapi.com/latestnews', options)
	.then(response => response.json())
	.then(data=>{
        setNews(data)
        .catch(err => console.error(err));
    })
    return(
        <div>
            <BarraDeTarefas2>

          
<form onSubmit={e => e.preventDefault()}>
<h3>Busque a sua notícia</h3>
<input  onChange={(e) => setSearch(e.target.value)} type="text" id="txtBusca" data-search placeholder="Buscar pelo nome do jogo"/>


</form> 

</BarraDeTarefas2>
<div>
    {news.filter((item)=>{
          return search.toLowerCase() === '' ? item : item.title.toLowerCase().includes(search)
    }).map((item)=>{
        return(
      <C>
          
     
         
              <Button>
             
              <h2>{item.title}</h2>
                 <img src={item.thumbnail}/>
                 <p>{item.short_description}</p>
                 <a href={item.article_url} className="button">Ver no site</a>
              </Button>
           
              
            
          
          </C>
        )
       })}
      
      </div>

</div>
        
    )
}