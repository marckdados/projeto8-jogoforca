import imagem from "./assets/forca0.png";
import styled from "styled-components";
import array from "./alfabeto";
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
      <Botoes>
        {array.map((letra, index) => (
          <div key={index}>{letra.toUpperCase()}</div>
        ))}
      </Botoes>
      <CaixaInput>
        <span>Já sei a palavra !</span>
        <input placeholder="" />
        <button>Chutar</button>
      </CaixaInput>
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
  margin: 20px 0;
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
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;

  div {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e1ecf4;
    border-radius: 6px;
    border: 1px solid #93b8d1;
    margin: 10px 10px;
    font-weight: 700;
    color: #93b8d1;
    cursor: pointer;

    &:hover {
      background-color: #608096;
    }
  }
`;

const CaixaInput = styled.div`
  width: 50%;
  display: flex;
  margin-top: 50px;
  justify-content: space-evenly;
  align-items: center;

  input {
    width: 30%;
    height: 30px;
    border-radius: 3px;
  }

  button {
    width: 10%;
    background-color: #e1ecf4;
    color: #39739d;
    font-weight: 700;
    border-radius: 6px;
    border: 1px solid #93b8d1;
    height: 40px;
  }
`;
