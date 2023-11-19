import {kafka} from "./index.js";

const kafkaConsumer = async (topic) =>{
    const consumer = kafka.consumer({ groupId: '$GROUP_NAME' });
    await consumer.connect();

    await consumer.subscribe({
        topic,
        fromBeginning:true,
    });
    
    return consumer;
    //consumer.disconnect();
}

export {kafkaConsumer};