# Kafka Test Project

Este é um projeto simples utilizado para testar a integração do Apache Kafka como message broker. O projeto consiste em dois aplicativos: um produtor (producer) e um consumidor (consumer). O produtor envia mensagens JSON para um tópico no Kafka(MESSAGES), enquanto o consumidor escuta esse tópico e exibe as mensagens recebidas.

## Configuração

### Kafka Cluster

O projeto utiliza um cluster Kafka hospedado no [Upstash](https://upstash.com/). Certifique-se de criar uma conta no Upstash e configurar seu cluster. Substitua as informações de configuração do Kafka no arquivo `.env` de cada aplicativo com as informações fornecidas pelo Upstash.

### Instalação

Para executar os aplicativos, siga estas etapas:

#### Produtor (Producer)

1. Navegue até o diretório `/producer`:
   ```
   cd producer
   ```

2. Instale as dependências:
   ```
   npm install
   ```

3. Inicie o produtor:
   ```
   npm run start
   ```

4. O produtor estará disponível em `http://localhost:3000`. Teste enviando mensagens JSON para `http://localhost:3000/message`.

#### Consumidor (Consumer)

1. Navegue até o diretório `/consumer`:
   ```
   cd consumer
   ```

2. Instale as dependências:
   ```
   npm install
   ```

3. Inicie o consumidor:
   ```
   npm run start
   ```

4. O consumidor estará ouvindo as mensagens do tópico no Kafka. As mensagens recebidas serão exibidas no console.

## Contribuição

Sinta-se à vontade para contribuir para este projeto, abrindo issues ou enviando pull requests.

## Licença

Este projeto está licenciado sob a licença [MIT](LICENSE).