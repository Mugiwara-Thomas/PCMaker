import styled from "styled-components";

const CardPai = styled.div`
  width: 90%;
  height: 13pc;
  background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
  border-radius: 20px;
  transition: all 0.3s;
  &:hover {
    box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.3);
  }
  margin: 1pc 0pc;
`;

const CardFilho = styled.div`
  width: 90;
  height: 13pc;
  background-image: url(${(props) => props.url});
  background-size: cover;
  transition: all 0.2s;
  border-radius: 10px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  &:hover {
    transform: scale(0.98);
    border-radius: 20px;
  }
  overflow: hidden;
  position: relative;
`;

const GameName = styled.div`
position: absolute;
bottom: 0;
width: 100%;
height: 100%;
padding: 10px;
background: rgba(30, 30, 30, 0.9);
color: white;
text-align: center;
transform: translateY(100%);
transition: transform 0.3s ease;
display: flex;
justify-content: center;
align-items: center;
font: bold;
${CardFilho}:hover & {
  transform: translateY(0);
}
`;

export { CardPai, CardFilho, GameName };
