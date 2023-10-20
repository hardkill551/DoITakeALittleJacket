import styled from "styled-components";
import "../style/ErrorPageStyle";
import { BackGround } from "../style/HomeStyle";
import { useEffect, useState } from "react";

export default function ErrorPage() {
  const [time, setTime] = useState<number>(10);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    if (time === 0) {
      clearInterval(intervalId);
      window.location.href = "/";
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [time]);

  return (
    <>
      <BackGround>
        <ErrorPageStyle>
          <h1>Essa Página não existe</h1>
          <h2>Sendo redirecionado em {time} segundos</h2>
          {time!==0?<></>:<h2>Sendo redirecionado!</h2>}
        </ErrorPageStyle>
      </BackGround>
    </>
  );
}

const ErrorPageStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    margin-top: 20px;
    color: white;
    font-weight: 600;
  }
`;
