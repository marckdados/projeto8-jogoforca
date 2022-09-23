import imagem from "./assets/forca0.png";
import styled from "styled-components";
export default function App() {
  return (
    <Container>
      <Topo>
        <img src={imagem} alt="Imagem" />
        <Palavra>
          <button>Escolher Palavra</button>
          <span>ABCDERFGHI</span>
        </Palavra>
      </Topo>
      <Botoes></Botoes>
    </Container>
  );
}
const Container = styled.div`
  font-family: "Roboto";
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Topo = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-around;
  img {
    width: 30%;
  }
`;

const Palavra = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  button {
    width: 40%;
    height: 50px;
    background-color: #44c448;
    border-radius: 6px;
    border: none;

    font-weight: 700;
    font-size: 1.2em;
    color: #ffffff;
  }
`;

const Botoes = styled.div`
  width: 70%;
  display: flex;
  flex-wrap: wrap;

  div {
    width: 50px;
    height: 50px;
    background-color: #e1ecf4;
    border-radius: 6px;
    border: 1px solid #93b8d1;
    margin: 10px 10px;
  }
`;
