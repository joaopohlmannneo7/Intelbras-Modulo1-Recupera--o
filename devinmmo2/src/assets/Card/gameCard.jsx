import { Link } from "react-router-dom"
import styled from "styled-components";



const GameCard = ({item, showLink = true}) =>{
    
    return(
        <C>
        
   
       
        <Button>
        <img src={item.thumbnail} alt={item.title} />
      <h2>{item.title}</h2>
      <p>
        {item.short_description}
      </p>
      <a id="sla">{item.platform}</a>
      {showLink && <Link to={`/games/${item.id}`}>Detalhes</Link>}
     
        </Button>
     {/* `/games/${item.id}` */}
        
      
    
    </C>
    )
    
}

export default GameCard;

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
left: -50px;
/* Inside auto layout */

flex: none;
order: 2;
flex-grow: 1;


`
export const Button = styled.div`
border-radius: 5px;
  box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
  border: 1px solid rgba(0, 0, 0, 0.8);
  margin: 520px 0px 500px 20px;
    background-color: white;
    width: 560px;
    gap: 30px;
    height: 550px;
  font-size: 20px;
  position: relative;
left:120px;

  img{
    width: 400px;

    position: absolute;
    left: 80px;
   top: 20px;

  }
p{
display: flex;
position: relative;
font-size: 15px;
top: 260px;
left: 10px;
    
}
h2{
    position: relative;
    top: 260px;
    left:20px;
}
a{
  position: absolute;
  top: 470px;
  left: 240px;
  border-radius: 5px;
  box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
  border: 1px solid rgba(0, 0, 0, 0.8);
  background: white;
  text-decoration: none;
  color:black
}
#sla{
  color: blue;
  border-color: blue;
  position: absolute;
  top: 507px;
  left: 400px ;
}
`