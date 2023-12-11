import styled from 'styled-components';

const ButtonStyle = styled.button`
  border-radius: 10px; 
  padding: 2% 35%; 
  font-size: 1em; 
  justify-content: center;


  background-color: #9B469A; 
  border: 1px solid #000;
  cursor: pointer; 

  margin: 1pc 0pc;
  font-size: 100%;
  color: white; 
  font-weight: bold;

  &:hover {
    background-color: #D961D7;
  }
`;

const ButtonStyleResponse = styled.button`
  border-radius: 10px; 
  padding: 2% 10%; 
  font-size: 1em; 
  justify-content: center;


  background-color: #752b74; 
  border: 1px solid #000;
  cursor: pointer; 

  margin: 1pc 0pc;
  font-size: 100%;
  color: white; 
  font-weight: bold;

  &:hover {
    background-color: #D961D7;
  }
`;


const ButtonRequestStyle = styled.button`
  background: "#BF4F74";
  color: "white";

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
  border-radius: 3px;
`;

const ButtonStyleHome = styled.button`
  border-radius: 10px; 
  font-size: 1.5pc; 
  justify-content: center;
  padding: 2pc 12pc;

  background-color: #81047F; 
  border: 1px solid #000;
  cursor: pointer; 
  margin-bottom: 1pc;
  color: white; 
  font-weight: bold;

  &:hover {
    background-color: #D961D7;
  }
`;


export { ButtonStyle, ButtonRequestStyle, ButtonStyleResponse, ButtonStyleHome};