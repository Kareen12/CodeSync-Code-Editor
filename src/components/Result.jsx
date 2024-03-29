import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataProvider";

const Container = styled(Box)`
    height: 41vh;
    display: flex;


    @media (max-width: 600px) {
        flex-direction:column;
        height: 90vh;
        margin-top: 7rem;
    }

`
const Result = () => {
    const [src, setSrc] = useState('');

    const {html,css,js} = useContext(DataContext);
    const srcCode = `
        <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
        </html>
    `
    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrc(srcCode);
        }, 1000);

        return () => clearTimeout(timeout);
    }, [html, css, js])
    return(
        <> 
            <Container style={html || css || js ? null : {background: '#444857' }} className="result">
                <iframe 
                    srcDoc={src}
                    title="Output"
                    sandbox="allow-scripts"
                    frameBorder={0}
                    width="100%"
                    height="100%"                    
                />
            </Container>
        </>
    )
}
export default Result;