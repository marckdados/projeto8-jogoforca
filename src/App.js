import imagem0 from "./assets/forca0.png";
import imagem1 from "./assets/forca1.png";
import imagem2 from "./assets/forca2.png";
import imagem3 from "./assets/forca3.png";
import imagem4 from "./assets/forca4.png";
import imagem5 from "./assets/forca5.png";
import imagem6 from "./assets/forca6.png";

import styled from "styled-components";
import array from "./alfabeto";
import palavras from "./palavras";
import { useState } from "react";

export default function App() {
  const arrayImagem = [
    imagem0,
    imagem1,
    imagem2,
    imagem3,
    imagem4,
    imagem5,
    imagem6,
  ];
  const [palavra, setPalavra] = useState("");
  const [preecheForca, setPreencheForca] = useState([]);
  const [acertos, setAcertos] = useState(0);
  const [erros, setErros] = useState(0);
  const [printaImagem, setPrintaImagem] = useState(arrayImagem[0]);
  const [inputPalavra, setInputPalavra] = useState("");
  const [desabilitado, setDesabilitado] = useState(true);
  const [corForca, setCorForca] = useState("");

  function habilitarBotoes() {
    array.map((botao) => (botao.isDisabled = false));
    setDesabilitado(false);
  }
  function desabilitarBotoes() {
    array.map((botao) => (botao.isDisabled = true));
    setDesabilitado(true);
  }

  function escolherPalavra() {
    habilitarBotoes();
    //let contaErro = erros;
    palavras.sort(comparador);
    const sorteandoPalavra = palavras[0];

    setCorForca("#000000");

    setPalavra(sorteandoPalavra);
    setPreencheForca([]);
    if (erros !== 0) {
      setErros(0);
    }
    if (acertos !== 0) {
      setAcertos(0);
    }
    const arrayDeTracos = [];
    for (let i = 0; i <= sorteandoPalavra.length - 1; i++) {
      arrayDeTracos.push("_ ");
    }
    setPreencheForca(arrayDeTracos);
  }
  function comparador() {
    return Math.random() - 0.5;
  }

  function verificaBotao(letra) {
    const novoArray = [...preecheForca];
    let contador = acertos;
    let contadorErro = erros;
    for (let i = 0; i <= palavra.length; i++) {
      if (letra === palavra[i]) {
        novoArray[i] = letra;
      }
    }
    if (!novoArray.includes(letra)) {
      contadorErro++;
    } else {
      contador++;
    }
    setPrintaImagem(arrayImagem[contadorErro]);
    setAcertos(contador);
    setErros(contadorErro);
    setPreencheForca(novoArray);

    finalizandoJogo(contador, contadorErro);
  }

  function finalizandoJogo(acertos, erros) {
    if (acertos === palavra.length) {
      let novaCor = "#5EAF61";
      setCorForca(novaCor);
      desabilitarBotoes();
    }
    if (erros === 6) {
      let novaCor = "#E74F2E";
      setCorForca(novaCor);
      desabilitarBotoes();
    }
  }

  function chutarPalavra(chute) {
    let tamanhoPalavra = palavra.length;
    let maximoErro = 0;
    if (chute === palavra) {
      let palavraCerta = palavra;
      setAcertos(tamanhoPalavra);
      setPreencheForca(palavraCerta);
      let novaCor = "green";
      setCorForca(novaCor);
    } else {
      let palavraCerta = palavra;
      maximoErro = 6;
      setErros(maximoErro);
      setPreencheForca(palavraCerta);
      let novaCor = "red";
      setCorForca(novaCor);
      setPrintaImagem(arrayImagem[maximoErro]);
    }
    desabilitarBotoes();

    finalizandoJogo(tamanhoPalavra, maximoErro);
    setInputPalavra("");
  }

  return (
    <Container>
      <Topo>
        <img data-identifier="game-image" src={printaImagem} alt="Imagem" />
        <Palavra cor={corForca}>
          <button data-identifier="choose-word" onClick={escolherPalavra}>
            Escolher Palavra
          </button>
          <span data-identifier="word">{preecheForca}</span>
        </Palavra>
      </Topo>
      <Botoes>
        {array.map((letra, index) => (
          <button
            data-identifier="type-guess"
            disabled={letra.isDisabled}
            onClick={() => {
              verificaBotao(letra.letra);
              letra.isDisabled = true;
            }}
            key={index}
          >
            {letra.letra.toUpperCase()}
          </button>
        ))}
      </Botoes>
      <CaixaInput>
        <span data-identifier="letter">Já sei a palavra !</span>
        <input
          value={inputPalavra}
          disabled={desabilitado}
          onChange={(e) => setInputPalavra(e.target.value)}
        />
        <button
          data-identifier="guess-button"
          disabled={desabilitado}
          onClick={() => chutarPalavra(inputPalavra)}
        >
          Chutar
        </button>
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
  span {
    font-size: 1.5em;
    font-weight: 700;
    color: ${(props) => props.cor};
  }
`;

const Botoes = styled.div`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;

  button {
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

    &:disabled {
      color: #959a9b;
      background-color: #9faab5;
      border: 1px solid #959a9b;
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

    &:disabled {
      color: #959a9b;
      background-color: #9faab5;
      border: 1px solid #959a9b;
    }
  }
`;
