import { Container, Nav } from "./style";
import { Link } from "react-router-dom";
export const Header = (e) => {

   
    return (
        <Container>
            <Nav>
                <h1>DEVinMMO</h1>
                <Link id="ok" to={"/news"} style={{ textDecoration: 'none', color: 'black' }}>Notícias</Link>
            </Nav>
        </Container>
    )
};

