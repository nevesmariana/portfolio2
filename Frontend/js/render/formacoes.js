export function renderizarFormacoes(formacoes) {
    const container = document.getElementById("formacao-container");
    if (!container) return;

    container.innerHTML = formacoes.map(f => `
        <div class="col-md-5 mb-4">
            <div class="card shadow-sm border-0 h-100 p-3 text-start">
                <div class="d-flex align-items-center mb-3">
                    <i class="bi bi-mortarboard-fill text-primary fs-3 me-3"></i>
                    <div>
                        <h6 class="fw-bold mb-0">${f.curso}</h6>
                        <small class="text-muted">${f.instituicao}</small>
                    </div>
                </div>
                <p class="small text-secondary mb-0">
                    <i class="bi bi-calendar3 me-2"></i>${f.periodo}
                </p>
            </div>
        </div>
    `).join("");
}