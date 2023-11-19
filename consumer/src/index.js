import express from "express";
import cors from "cors";
import dotenv from 'dotenv/config';
import { kafkaConsumer} from './infra/providers/kafka/consumer.js';

const app = express();
const PORT = process.env.APP_PORT;

app.use(cors());
app.use(express.json());

/*
    Não existe necessidade de declarar um rota/endpoit porque a função
    do consumer é fazer o display das mensagens enviadas pelo producer
*/

app.listen(PORT, async ()=>{
    console.log("Consumer server On!");

    //ouvindo/recebendo eventos/mensagens do message broker(kafka)
    const consumer = await kafkaConsumer('MESSAGES');
    //display das mensagens do producer
    await consumer.run({
        eachMessage: async ({message}) =>{
            const messageToString = message.value?.toString();
            console.log(messageToString+"\n\n");
        }
    });
});