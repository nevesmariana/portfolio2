export function renderizarCertificados(certificados, admin) {
    const container = document.getElementById("cursos-container");
    if (!container) return;

    container.innerHTML = certificados.map(c => `
        <div class="col-md-5 mb-4">
            <div class="card shadow-sm border-0 p-3 h-100 text-center" style="border-radius: 15px;">
                <div class="card-body d-flex flex-column">
                    <h5 class="fw-bold mb-1">${c.titulo}</h5>
                    <p class="text-muted small mb-4">${c.descricao}</p>
                    <a href="${c.link}" target="_blank" class="btn btn-custom w-100 mt-auto">Ver Certificado</a>
                    ${admin ? `<button class="btn btn-danger btn-sm mt-2">Excluir</button>` : ""}
                </div>
            </div>
        </div>
    `).join("");
}