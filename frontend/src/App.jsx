import { useState } from "react";
import "./App.css";

function App() {
  const [valor, setValor] = useState("");
  const [origem, setOrigem] = useState("BRL");
  const [destino, setDestino] = useState("USD");
  const [resultado, setResultado] = useState(null);
  const [erro, setErro] = useState("");

  const converter = async () => {
      setErro("");

      try {
          const resposta = await fetch(
              `http://localhost:3000/converter?valor=${valor}&origem=${origem}&destino=${destino}`
          );

          const dados = await resposta.json();

          if (!resposta.ok) {
              setErro(dados.erro);
              return;
          }

          setResultado(dados.resultado);

      } catch (erro) {
          setErro("Não foi possível conectar ao servidor.");
      }
  };

    return (
        <div className="container">

            <h1>Conversor de Moedas</h1>

            <div className="conversor">

                <input
                    type="number"
                    placeholder="Digite um valor"
                    value={valor}
                    onChange={(event) => setValor(event.target.value)}
                />

                <div className="moedas">
                    <select
                        value={origem}
                        onChange={(event) => setOrigem(event.target.value)}
                    >
                        <option value="BRL">BRL</option>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                    </select>

                    <span>→</span>

                    <select
                        value={destino}
                        onChange={(event) => setDestino(event.target.value)}
                    >
                        <option value="USD">USD</option>
                        <option value="BRL">BRL</option>
                        <option value="EUR">EUR</option>
                    </select>
                </div>

                <button onClick={converter}>
                    Converter
                </button>

            </div>

            <p className="resultado">
                Resultado: {resultado !== null ? resultado.toFixed(2) : "--"}
            </p>

            {erro && <p className="erro">{erro}</p>}

        </div>
    );
}

export default App;