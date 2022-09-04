import styled, { createGlobalStyle } from "styled-components";
import enviar from "./img/enviar/";

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
    margin: 10px;
    padding: 5px;
  }

  button {
    padding: 10px;
    background-image: url("");
    border: none;
  }
`;
export const Button = styled.div`
  background-color: transparent;
  border: none;
`;
