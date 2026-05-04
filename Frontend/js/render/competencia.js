export function renderizarCompetencias(competencias) {
    const container = document.getElementById("competencias-container");
    if (!container) return;

    let html = "";
    competencias.forEach(item => {
        if (item.tipo === "hard") {
            html += `
                <div class="col-md-6 mb-4">
                    <h3 class="mb-4">Hard Skills</h3>
                    <div class="skills-badges">
                        ${item.images.map(img => `<img src="${img}" alt="Skill">`).join("")}
                    </div>
                </div>`;
        } else if (item.tipo === "soft") {
            html += `
                <div class="col-md-6 mb-4">
                    <h3 class="mb-4">Soft Skills</h3>
                    <ul class="soft-list">
                        ${item.lista.map(skill => `<li>- ${skill}</li>`).join("")}
                    </ul>
                </div>`;
        }
    });
    container.innerHTML = html;
}