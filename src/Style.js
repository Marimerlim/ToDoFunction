import styled, { createGlobalStyle } from "styled-components";
export const GlobaStyle = createGlobalStyle`
*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: #fdedd5;
  }
`;
export const App = styled.div`
  text-align: center;
  margin-top: 20px;

  input {
    width: 60%;
    margin: 10px;
    padding: 7px 15px;
    background-color: #fff5ee;
    border: groove #ffe4e1;
    outline: none;
  }

  button {
    padding: 20px;
    background-image: url("https://i.pinimg.com/originals/9e/7a/2c/9e7a2c58c6aee3b2c662df358c7bee32.png");
    background-size: 70px;
    background-repeat: no-repeat;
    background-position: center;
    object-fit: contain;
    background-color: transparent;
    border: none;
  }
  ul {
    width: 70%;
    margin: 0 auto;
    list-style: none;
  }
  li {
    margin: 10px;
    padding: 7px 15px;
    background-color: #ffe4c4;
    border-radius: 9px;
    display: flex;
    justify-content: space-between;
  }
`;
export const Button = styled.div`
  background-color: transparent;
  border: none;
`;
