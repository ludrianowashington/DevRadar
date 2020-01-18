const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");

const routes = require("./routes");
const { setupWebsocket } = require("./websocket");

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect(
  "mongodb+srv://omnistack:omnistack@cluster0-fwdt4.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(cors());
app.use(express.json());
app.use(routes);

// Metodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros:

// Query Params: request.query(filtros, ordenação, paginação, ...)
// Route Params: request.params(Identificar um recurso na alteração ou remoção)
// Body: request.body(Dados para criação ou alteração de um registro)

// MongoDB (não-relacional)

server.listen(3333);
