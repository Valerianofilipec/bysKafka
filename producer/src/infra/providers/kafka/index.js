import {Kafka} from "kafkajs";
import "dotenv/config";

const ENDPOINT = process.env.KAFKA_ENDPOINT;
const USERNAME = process.env.KAFKA_USERNAME;
const PASSWORD = process.env.KAFKA_PASSWORD;
 
const kafka = new Kafka({
  brokers: [ENDPOINT],
  sasl: {
    mechanism: 'scram-sha-256',
    username:USERNAME,
    password:PASSWORD,
  },
  ssl: true,
});

export {kafka};