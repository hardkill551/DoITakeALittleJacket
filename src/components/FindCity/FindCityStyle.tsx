import styled from "styled-components";

export const FindCityStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  p{
    margin-top: 20px;
    color: white;
  }
  h1 {
    color: #006eff;
    font-weight: 700;
    margin-bottom: 20px;
    font-size: 30px;
    text-align: center;
  }
  div {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
  }
  input {
    width: 200px;
    height: 30px;
    border-radius: 5px;
    border: none;
    padding: 10px;
  }
  input:focus {
    outline: 2px solid #004196;
  }
  button {
    height: 30px;
    border-radius: 5px;
    border: none;
    background-color: #004196;
    color: #fff;
    font-weight: 600;
  }
  button:hover {
    background-color: #006eff;
    cursor: pointer;
  }
`;
