import { Container, Nav } from "./style";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import ThemeContext from "../contexts/Theme";
import React, {useContext} from "react";
export const Header = (e) => {

    const {switchTheme} = useContext(ThemeContext)
    return (
        <Container>
            <Nav>
                <h1>DEVinMMO</h1>
                <Link id="ok" to={"/news"} style={{ textDecoration: 'none', color: 'black' }}>Notícias</Link>
                <Button onClick={switchTheme}>Dark Mode</Button>
            </Nav>
        </Container>
    )
};

