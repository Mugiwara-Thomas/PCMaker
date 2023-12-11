import styled from 'styled-components';

const Container = styled.div`
    width: 85%;
    height: auto;
    align-content: center; 
    display: flex;
    justify-content: space-between;
    margin: 0.8pc auto;
    grid-area: pecas;
    border-radius: 10px;
    background-color: #9B469A;
    align-items: center;

`;

const Subtitle = styled.h1`
    text-align: center;
    color: #FCFCFCEA;
    font-size: 2em;
`;

const Title = styled.h1`
    text-align: center;
    padding: 0 0 0 2pc;
    color: #fff;
    font-size: 5em;
    & .span2 {
        color: #352C35;
    }
    & .span {
        color: #EE0EEA;
    }
`;

const Content = styled.p`
  color: #fff;
  font-size: 1em;
  padding: 8pc 2pc;
`;

const Subcontent = styled.p`
  color: #fff;
  font-size: 1.5em;
  padding: 8pc 11.5pc 8pc 12.5pc;
  text-justify: inter-word;
`;
export { Container, Title, Content, Subtitle, Subcontent };