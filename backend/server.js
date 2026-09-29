const express = require("express");//importa o express
const cors = require("cors");

const app = express();//aplicação
const PORT = 3000;//porta 3000

app.use(cors({
    origin: "http://localhost:5173"
}));

app.get("/", (req, res) => {//rota GET com req(requisição recebida), res(resposta que será enviada)
    res.send("Backend funcionando!");
});


app.get("/converter", async (req, res) => {
    const { valor, origem, destino } = req.query;

    if (!valor || !origem || !destino) {
        return res.status(400).json({
            erro: "Informe valor, origem e destino."
        });
    }

    if (Number(valor) <= 0) {
        return res.status(400).json({
            erro: "O valor deve ser maior que zero."
        });
    }

    try {
        const resposta = await fetch(
            `https://api.frankfurter.dev/v2/rate/${origem}/${destino}`
        );

        if (!resposta.ok) {
            return res.status(400).json({
                erro: "Não foi possível realizar a conversão."
            });
        }

        const dados = await resposta.json();

        const resultado = Number(valor) * dados.rate;

        res.json({
            valor: Number(valor),
            moedaOrigem: origem,
            moedaDestino: destino,
            cotacao: dados.rate,
            resultado: resultado
        });

    } catch (erro) {
        res.status(500).json({
            erro: "Erro interno do servidor."
        });
    }
});


app.listen(PORT, () => { //coloca o servidor para escutar requisições
    console.log(`Servidor rodando na porta ${PORT}`); //porta onde o backend estará rodando
});