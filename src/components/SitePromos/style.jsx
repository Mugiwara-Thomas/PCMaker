import styled from 'styled-components';

const Container = styled.div`
    width: 85%;
    height: auto;
    align-content: center; 
    display: flex;
    margin: 0.8pc auto;
    grid-area: pecas;
    border-radius: 10px;
    background-color: #9B5E4607;
    align-items: center;
`;

const Title = styled.h1`
    text-align: center;
    padding: 0 3pc 0 0;
    color: #fff;
    font-size: 2.5em;
`;

const Content = styled.p`
  color: #fff;
  font-size: 1em;
  padding: 5pc 2pc;
`;

const Subcontent = styled.p`
  color: #fff;
  font-size: 1.75em;
  padding: 8pc 14.5pc 8pc 14.5pc;
  text-justify: inter-word;
`;
export { Container, Title, Content, Subcontent };