import styled from "styled-components";

 const NewsCard = ({item}) =>{

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
}

export default NewsCard;

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
  border: 1px solid ${({ theme }) => theme.border};
  margin: 520px 0px 500px 20px;
    background-color: ${({ theme }) => theme.background};
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
    font-size: 20px;
}
a{
  position: absolute;
  top: 470px;
  left: 240px;
  border-radius: 5px;
  box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
  border: 1px solid ${({ theme }) => theme.border};
  background:  ${({ theme }) => theme.background};
  text-decoration: none;
  color: ${({ theme }) => theme.text};
}
#sla{
  color: ${({ theme }) => theme.text};
  border-color: ${({ theme }) => theme.border};
  position: absolute;
  top: 507px;
  left: 400px ;
}
`