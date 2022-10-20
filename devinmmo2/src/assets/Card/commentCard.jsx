import styled from "styled-components";

export const Comment = ({items}) =>{
    return(
        <div>
            <h3>{items.nome}</h3>
            <p>{items.comment}</p>
            
        </div>
    )
}
