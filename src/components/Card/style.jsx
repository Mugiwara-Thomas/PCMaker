import styled from "styled-components";

const CardPai = styled.div`
  width: 200px;
  height: 254px;
  background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
  border-radius: 20px;
  transition: all 0.3s;

  &:hover {
    box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.3);
  }
  margin: 1pc 0.870pc;
`;

const CardFilho = styled.div`
  width: 200px;
  height: 254px;
  background-image: url(${(props) => props.url});
  background-size: cover;
  transition: all 0.2s;
  border-radius: 10px;
  &:hover {
    transform: scale(0.98);
    border-radius: 20px;
  }
`;

export {CardPai, CardFilho};
