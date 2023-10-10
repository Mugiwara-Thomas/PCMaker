import styled from "styled-components";

const PainelElement = styled.div`
    width: 80vw;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    grid-area: main;
    margin-top: 2pc;
    
    ${(props) => {
        if(props.response === true){
            return `justify-content:center;`
        }
    }}
    `;

export default PainelElement;