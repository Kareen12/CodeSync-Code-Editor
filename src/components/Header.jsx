import styled from "@emotion/styled";
import { AppBar,Toolbar } from "@mui/material";
import logo from "../logosvg.svg";


const Container = styled(AppBar)`
    background: #060606;
    position: static;
    border-bottom: 1px solid #2f2f2f;
    height: 9vh;
`;

const Header = () => {
    return (
        <>
            <Container position="static">
                <Toolbar>
                    <img src={logo} alt="logo" style={{width: 40}}/>
                    <span style={{marginLeft: '7px', fontSize: '20px', fontWeight: '900', fontFamily: 'monospace'}}>CODESYNC</span>
                </Toolbar>
            </Container>
        </>
    )
}
export default Header;