import { fetchData } from "./api.js";
import { renderizarCompetencias } from "./render/competencia.js";
import { renderizarProjetos } from "./render/projetos.js";
import { renderizarCertificados } from "./render/certificados.js";
import { renderizarFormacoes } from "./render/formacoes.js";

// Variável de estado do Admin
let admin = false;

// =========================
// GREETING
// =========================
function getGreeting() {
    const el = document.getElementById("greeting");
    if (!el) return;
    const hour = new Date().getHours();
    if (hour < 12) el.textContent = "Bom dia, seja bem-vinda!";
    else if (hour < 18) el.textContent = "Boa tarde, seja bem-vinda!";
    else el.textContent = "Boa noite, seja bem-vinda!";
}

// =========================
// ADMIN LOGIC
// =========================
function ativarAdmin() {
    const senha = prompt("Senha admin:");
    if (senha === "1234") {
        admin = true;
        alert("Modo admin ativado!");
        atualizarTela();
    } else {
        alert("Senha incorreta");
    }
}

// Configuração do clique na logo para Admin
let clicks = 0;
const logo = document.querySelector(".navbar-brand");
if (logo) {
    logo.addEventListener("click", () => {
        clicks++;
        if (clicks === 5) {
            ativarAdmin();
            clicks = 0;
        }
    });
}

// =========================
// CARREGAMENTO DE DADOS (INIT)
// =========================
async function init() {
    // Busca todos os dados simultaneamente
    const [competencias, projetos, certificados, formacoes] = await Promise.all([
        fetchData("/competencias"),
        fetchData("/projetos"),
        fetchData("/cursos"),
        fetchData("/formacoes")
    ]);
    console.log("Dados recebidos:", { competencias, projetos, certificados, formacoes })

    // Renderiza passando o estado do admin para as funções
    renderizarCompetencias(competencias, admin);
    renderizarProjetos(projetos, admin);
    renderizarCertificados(certificados, admin);
    renderizarFormacoes(formacoes, admin);
}

// =========================
// UPDATE GERAL
// =========================
function atualizarTela() {
    // Controla a visibilidade dos formulários de adição
    const formProj = document.getElementById("formProjeto");
    const formCurs = document.getElementById("formCurso");

    if (formProj) formProj.classList.toggle("d-none", !admin);
    if (formCurs) formCurs.classList.toggle("d-none", !admin);

    // Recarrega os renderizadores com o novo estado de admin
    init();
}

// Inicialização
getGreeting();
init();