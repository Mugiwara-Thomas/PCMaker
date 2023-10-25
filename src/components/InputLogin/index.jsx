const Input = styled.input.attrs((props) => ({
  // we can define static props
  type: "text",

  // or we can define dynamic ones
  $size: props.$size || "1em",
}))`
    width: ${(props) => props.$size};
    max-height: 10vh;
    color: #4f4a4a;
    font-size: 1em;
    border: 2px solid #4f4a4a;
    border-radius: 11px;
    background-color: #ffffff;
  `;


function InputLogin() {

  return (
    <>
      <Input size="20"></Input>
    </>
  );  
}

export default InputLogin;