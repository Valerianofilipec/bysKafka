import { kafka } from "./index.js";

export class KafkaSendMessage{
    async execute(topic, payload){
        const producer = kafka.producer();

        await producer.connect();
        console.log(`message sent to topic ${topic}`);
        console.log(payload);

        await producer.send({
            topic,
            messages: [{value: JSON.stringify(payload)}],
        })

        producer.disconnect();
    }
}