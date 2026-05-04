export function renderizarProjetos(projetos, admin) {
    const container = document.getElementById("projects-container");
    if (!container) return;

    container.innerHTML = projetos.map(p => {
        // Remove "Frontend/" do caminho para a imagem carregar corretamente
        const imgPath = p.img.replace("Frontend/", "");

        return `
            <div class="col-md-4 mb-4">
                <div class="card project-card shadow-sm border-0">
                    <img src="${imgPath}" class="card-img-top" alt="${p.titulo}">
                    <div class="card-body bg-white text-center">
                        <h5 class="fw-bold">${p.titulo}</h5>
                        <p class="text-muted small">${p.descricao}</p>
                        <a href="${p.link}" target="_blank" class="btn btn-custom w-100">Ver no GitHub</a>
                        ${admin ? `<button class="btn btn-danger btn-sm mt-2">Excluir</button>` : ""}
                    </div>
                </div>
            </div>
        `;
    }).join("");
}