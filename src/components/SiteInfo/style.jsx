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
    font-size: 4em;
`;

const Title = styled.h1`
    text-align: center;
    padding: 0 0 0 3pc;
    color: #fff;
    font-size: 8em;
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
  font-size: 2em;
  padding: 8pc 14.5pc 8pc 14.5pc;
  text-justify: inter-word;
`;
export { Container, Title, Content, Subtitle, Subcontent };