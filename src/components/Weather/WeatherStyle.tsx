import styled from "styled-components";

type Props = {
  background: string;
};

export const WeatherStyle = styled.div<Props>`
  padding: 30px;
  display: flex;
  height: 150px;
  max-width: 700px;
  width: 80vw;
  background-color: ${(props) =>
    props.background ? props.background : "#006eff"};
  justify-content: space-between;
  border-radius: 40px;

  div:first-child {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  div:first-child h3 {
    font-weight: 600;
    font-size: 20px;
  }
  div:last-child {
    display: flex;
    flex-direction: column;
  }
  div:last-child h2 {
    font-weight: 500;
    font-size: 50px;
    margin-top: 10px;
  }
  @media (max-width: 500px) {
    height: 250px;
    flex-direction: column;
    align-items: center;
    text-align: center;

    div:first-child,
    div:last-child {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    div:first-child h3 {
      margin-bottom: 10px;
    }
  }
`;
