import express from "express";
import cors from "cors";

import projetosRoutes from "./routes/projetosRoutes.js";
import cursosRoutes from "./routes/CursosRoutes.js";
import formacoesRoutes from "./routes/formacoesRoutes.js";
import competenciasRoutes from "./routes/competenciaRoutes.js";
import contatoRoutes from "./routes/contatoRoutes.js";


const app = express();

app.use(cors());
app.use(express.json());

app.use("/projetos", projetosRoutes);
app.use("/cursos", cursosRoutes);
app.use("/formacoes", formacoesRoutes);
app.use("/competencias", competenciasRoutes);
app.use("/contato", contatoRoutes);

export default app;