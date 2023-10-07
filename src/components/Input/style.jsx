import styled from "styled-components";

const Input = styled.input.attrs(props => ({
    // we can define static props
    type: "text",
  
    // or we can define dynamic ones
    $size: props.$size || "1em",
  }))`
    width: 1079px;
    color: #4F4A4A;
    font-size: 1em;
    border: 2px solid #4F4A4A;
    border-radius: 11px;
    background-color: #ffffff;
    margin-top:40px;
    margin-left:20px;
    padding: ${props => props.$size};
  `;

export { Input };