import styled from "styled-components";
export const Container = styled.div`

width: 104%;
height: 80px;
background: ${({ theme }) => theme.background};
position: relative;
top: -10px;
left: -9px;

`
export const Nav = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    
    h1{
        font: 1rem;
        color: ${({ theme }) => theme.text};
    }


`

