import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
 margin: 0;
 padding:0;
 box-sizing: border-box;

}

body{
   
    background: #f5f5f5;
    /* font-size: 14px; */
    color: #333;
    transition: all 1s;
    /* font-family: Georgia, 'Times New Roman', Times, serif; */
    

}

body, button{
    font: 400 1rem ;
}

a{
    text-decoration: none;
}
#root{
    height: 100%;
}



`