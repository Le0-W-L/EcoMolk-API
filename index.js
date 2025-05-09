require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");

// Middlewares globais
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Conexão com banco
const connectDatabase = require("./src/config/conn");
connectDatabase();

// Rotas modulares
const usuarioRoutes = require("./src/routes/usuarioRoutes");
const residuoRoutes = require("./src/routes/residuoRoutes");
const dashboardRoutes = require("./src/routes/dashboardRoutes");
const entregaRoutes = require("./src/routes/entregaRoutes");

// Registro das rotas
app.use("/usuarios", usuarioRoutes);
app.use("/residuos", residuoRoutes);
app.use("/dashboard", dashboardRoutes);
app.use("/entregas", entregaRoutes);

// Servir arquivos estáticos (páginas HTML)
app.use(express.static(path.join(__dirname, "src", "views")));

// Rota da Landing Page
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "src", "views", "LandingPage", "LandingPage_index.html"))
);

// Inicialização do servidor
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});