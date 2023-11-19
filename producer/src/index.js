import express from "express";
import cors from "cors";
import 'dotenv/config';
import morgan from "morgan";
import { KafkaSendMessage } from "./infra/providers/kafka/producer.js";

const app = express();
const PORT = process.env.APP_PORT;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use(morgan("dev"));

/*
    definir rota para receber mensagens simples
    {
        author: "nome do mensageiro",
        message: "mensagem"
    }
    OBS: assumindo que as mensagens chegam sem a necessidade de serem validadas 
*/
app.post("/message",  async (req, res)=>{

    const message = req.body;
    //enviar a mensagem recebida para o message broker
    const producer = new KafkaSendMessage();
    await producer.execute('MESSAGES', message);

    res.send(`Mensagem enviada`);
});

app.listen(PORT,()=>{
    console.log("Producer server On!");
});