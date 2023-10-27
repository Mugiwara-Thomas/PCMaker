import styled from 'styled-components';
import React, {useState} from 'react';
const Input = styled.input`
  /* Estilos padrão */
  width: 80%;
  height: 7%;
  border: 1px solid #000;
  border-radius: 15px;
  font-size: 16px;
  color: #333;
  background-color: #aaaaaa40;
  margin-top: 1pc;

  padding-left: 2pc;

  &:focus {
    outline: none;
    border-color: #000;
  }

  &.invalid {
    border-color: #ff0000;
  }

`;

const TextoPrincipal = styled.h1`
  font-size: 2pc;
  font-weight: 700;
  color: #000
`

const Wrapper = styled.div` 
  margin-top: 20%;
  display: flex;
  flex-direction: column;
  text-align: center;
`

const CheckboxStyle = styled.input`
  position: relative;
  width: 20px;
  height: 20px;
  border: none;
  background-color: #ccc;

  &:checked {
    background-color: #000;
  }

  &:focus {
    outline: none;
  }
`;


const Label = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  color:#000;
  &:hover {
    background-color: var(--gray-200);
  }

  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: var(--gray-400);
  }
`;

const WrapperCheckbox = styled.div`
  display: flex;
  margin-top: 1pc;
`

export { Input, TextoPrincipal, Wrapper, CheckboxStyle, Label, WrapperCheckbox }