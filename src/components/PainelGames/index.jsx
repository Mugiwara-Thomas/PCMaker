import styled from "styled-components";

const PainelElement = styled.div`
    width: 90%;
    justify-content: center;
    height: 100%;
    display: flex;
    padding-bottom: 100px;  
    ${(props) => {
        if(props.response !== true){
            return `flex-wrap: wrap;`
        }
    }}

    margin: auto;
    grid-area: main;
    
    ${(props) => {
        if(props.response === true){
            return `justify-content:center;`
        }
    }}
    `;

export default PainelElement;