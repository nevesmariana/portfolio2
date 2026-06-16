export function renderizarProjetos(projetos, admin) {
    const container = document.getElementById("projects-container");
    if (!container) return;

    const cards = projetos.map(p => `
        <div class="col-md-4 mb-4">
            <div class="card project-card shadow-sm border-0">
                <img src="${p.img}" class="card-img-top" alt="${p.titulo}">
                <div class="card-body bg-white text-center">
                    <h5 class="fw-bold">${p.titulo}</h5>
                    <p class="text-muted small">${p.descricao}</p>

                    <a href="${p.link}" target="_blank" class="btn btn-custom w-100">
                        Ver no GitHub
                    </a>

                    <div class="mt-2">
                        <a href="#"
                           class="text-decoration-none small"
                           data-bs-toggle="modal"
                           data-bs-target="#modalProjeto${p.id}">
                            Ver detalhes →
                        </a>
                    </div>

                    ${admin ? `<button class="btn btn-danger btn-sm mt-2">Excluir</button>` : ""}
                </div>
            </div>
        </div>
    `).join("");

    const modais = projetos.map(p => `
        <div class="modal fade" id="modalProjeto${p.id}" tabindex="-1">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">

                    <div class="modal-header">
                        <h5 class="modal-title">${p.titulo}</h5>
                        <button type="button" class="btn-close"
                                data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                        <h6>Empresa Parceira</h6>
                        <p>${p.empresa}</p>

                        <h6>Problema</h6>
                        <p>${p.problema}</p>

                        <h6>Solução</h6>
                        <p>${p.solucao}</p>

                        <h6>Tecnologias Utilizadas</h6>
                        <ul>
                            ${p.tecnologias.map(t => `<li>${t}</li>`).join("")}
                        </ul>

                        <h6>Contribuições Pessoais</h6>
                        <p>${p.contribuicoes}</p>
                    </div>

                </div>
            </div>
        </div>
    `).join("");

    container.innerHTML = cards + modais;
}