import { CheckboxStyle, Input, Label } from "./style";
import React from "react";

function InputLogin({texto}) {

  return (
    <>
      <Input placeholder={texto}></Input>
    </>
  );  
}

function CheckBox(){
  return(
    <>
      <CheckboxStyle type="checkbox"></CheckboxStyle>
      <Label>Lembre-se de mim</Label>
    </>
  );
}



export { InputLogin, CheckBox}