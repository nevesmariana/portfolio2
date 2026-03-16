function getGreeting() {
    const hour = new Date().getHours();
    let message = "";

    if (hour >= 5 && hour < 12) {
        message = "Bom dia, seja bem-vindo ao meu portfólio!";
    }
    else if (hour >= 12 && hour < 18) {
        message = "Boa tarde, seja bem-vindo ao meu portfólio!";
    }
    else {
        message = "Boa noite, seja bem-vindo ao meu portfólio!";
    }

    document.getElementById("greeting").textContent = message;
}

getGreeting();


// Toggle formulário projetos
const toggleBtn = document.getElementById("toggleFormBtn");
const formWrapper = document.getElementById("formWrapper");

toggleBtn.addEventListener("click", () => {

    if (formWrapper.style.display === "none") {

        formWrapper.style.display = "block";
        toggleBtn.textContent = "Fechar Formulário";

    } else {

        formWrapper.style.display = "none";
        toggleBtn.textContent = "+ Adicionar Projeto";

    }

});


// PROJETOS
const form = document.getElementById("formProjeto");
const containerProjetos = document.getElementById("projects-container");

function renderProjetos(projetos) {

    if (!containerProjetos) return;

    containerProjetos.innerHTML = "";

    projetos.forEach(p => {

        const card = document.createElement("div");
        card.className = "col-lg-4 col-md-6";

        card.innerHTML = `
            <div class="card project-card shadow h-100">
                <img src="${p.img}" alt="${p.titulo}" class="card-img-top">

                <div class="card-body">

                    <h5 class="card-title">${p.titulo}</h5>
                    <p class="card-text">${p.descricao}</p>

                    <a href="${p.link}" target="_blank" class="btn btn-custom mb-2">
                        Ver no GitHub
                    </a>

                    <button class="btn btn-danger btn-sm deleteProjetoBtn" data-titulo="${p.titulo}" style="display:none;">
                        Apagar
                    </button>

                </div>
            </div>
        `;

        containerProjetos.appendChild(card);

    });

}


// carregar projetos
async function carregarProjetos() {

    try {

        const response = await fetch('js/projects.json');
        const projetosJSON = await response.json();

        const projetosLocal = JSON.parse(localStorage.getItem("projetos")) || [];

        const projetosTotais = [...projetosJSON, ...projetosLocal];

        renderProjetos(projetosTotais);

    }
    catch (err) {

        console.error("Erro ao carregar projetos:", err);

    }

}


// adicionar projeto
form.addEventListener("submit", e => {

    e.preventDefault();

    const projeto = {

        titulo: form.titulo.value.trim(),
        descricao: form.descricao.value.trim(),
        img: form.img.value.trim(),
        link: form.link.value.trim()

    };

    if (!projeto.titulo || !projeto.descricao || !projeto.img || !projeto.link) {

        alert("Por favor, preencha todos os campos.");
        return;

    }

    const projetosLocal = JSON.parse(localStorage.getItem("projetos")) || [];

    projetosLocal.push(projeto);

    localStorage.setItem("projetos", JSON.stringify(projetosLocal));

    alert("Projeto cadastrado!");

    form.reset();

    carregarProjetos();

});

carregarProjetos();


// função apagar projetos
function ativarDeleteProjetos() {

    const botoes = document.querySelectorAll(".deleteProjetoBtn");

    botoes.forEach(btn => {

        btn.style.display = "block";

        btn.addEventListener("click", () => {

            const titulo = btn.dataset.titulo;

            let projetosLocal = JSON.parse(localStorage.getItem("projetos")) || [];

            projetosLocal = projetosLocal.filter(p => p.titulo !== titulo);

            localStorage.setItem("projetos", JSON.stringify(projetosLocal));

            carregarProjetos();

        });

    });

}


// clique secreto projetos
let cliques = 0;

document.querySelector("#projetos h2").addEventListener("click", () => {

    cliques++;

    if (cliques === 3) {

        document.getElementById("toggleFormBtn").style.display = "inline-block";

    }

    if (cliques === 5) {

        ativarDeleteProjetos();
        cliques = 0;

    }

});


// CURSOS
const containerCursos = document.getElementById("cursos-container");

async function carregarCursos() {

    try {

        const response = await fetch('js/cursos.json');
        const cursos = await response.json();

        containerCursos.innerHTML = "";

        cursos.forEach(curso => {

            const card = document.createElement("div");
            card.classList.add("col-md-5", "mb-4");

            card.innerHTML = `
                <div class="card h-100 shadow text-center">

                    <div class="card-body">

                        <h5 class="card-title">${curso.titulo}</h5>
                        <p>${curso.descricao}</p>

                        <a href="${curso.link}" class="btn btn-custom mb-2" target="_blank">
                            Ver Certificado
                        </a>

                        <button class="btn btn-danger btn-sm deleteCursoBtn" data-titulo="${curso.titulo}" style="display:none;">
                            Apagar
                        </button>

                    </div>

                </div>
            `;

            containerCursos.appendChild(card);

        });
    }
    catch (err) {

        console.error("Erro ao carregar cursos JSON:", err);
    }
}

carregarCursos();


// apagar cursos
function ativarDeleteCursos() {

    const botoes = document.querySelectorAll(".deleteCursoBtn");

    botoes.forEach(btn => {

        btn.style.display = "block";

        btn.addEventListener("click", () => {

            const titulo = btn.dataset.titulo;

            let cursosLocal = JSON.parse(localStorage.getItem("cursos")) || [];

            cursosLocal = cursosLocal.filter(c => c.titulo !== titulo);

            localStorage.setItem("cursos", JSON.stringify(cursosLocal));

            carregarCursos();
        });
    });
}


// toggle formulário cursos
const toggleCursoBtn = document.getElementById("toggleCursoFormBtn");
const formCursoWrapper = document.getElementById("formCursoWrapper");

toggleCursoBtn.addEventListener("click", () => {

    if (formCursoWrapper.style.display === "none") {

        formCursoWrapper.style.display = "block";
        toggleCursoBtn.textContent = "Fechar Formulário";

    }
    else {

        formCursoWrapper.style.display = "none";
        toggleCursoBtn.textContent = "+ Adicionar Curso";
    }
});


// clique secreto cursos
let cliquesCursos = 0;
document.querySelector("#cursos h2").addEventListener("click", () => {
    cliquesCursos++;
    if (cliquesCursos === 3) {
        document.getElementById("toggleCursoFormBtn").style.display = "inline-block";

    }

    if (cliquesCursos === 5) {
        ativarDeleteCursos();
        cliquesCursos = 0;
    }
});