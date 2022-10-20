import styled from 'styled-components'

const StyledButton = styled.button`
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    border: 1px solid ${({ theme }) => theme.border};
    padding: 0.6rem;
    margin: 20px ;
    border-radius: 0.3rem;
    font-size: 1rem;
    font-weight: bold;

    &:hover {
        background: ${({ theme }) => theme.backgroundAlt};
        cursor: pointer;
    }
    &:focus {
        outline: none;
    }
`

export const Button = ({ children, onClick }) => (
    <StyledButton onClick={onClick}>
        {children}
    </StyledButton>
)


const StyledButton2 = styled.button`
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    border: 1px solid ${({ theme }) => theme.border};
    padding: 0.6rem;
    margin: 20px 20px 0px 0px;
    
    display: inline-block;
    justify-content: space-around;
    position: relative;
    right: -60px;
    top: 50px;
    border-radius: 0.3rem;
    font-size: 1rem;
    font-weight: bold;

    &:hover {
        background: ${({ theme }) => theme.backgroundAlt};
        cursor: pointer;
    }
    &:focus {
        outline: none;
    }
    `
   export const Button4 = ({ children, onClick }) => (
        <StyledButton2 onClick={onClick}>
            {children}
        </StyledButton2>
    )

    export const Link = styled.link`
     background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    
    `

    export default Button & Button4;