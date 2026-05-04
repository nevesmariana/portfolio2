export function configurarContato() {
    const form = document.getElementById("form-contato");
    if (!form) return;

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const formData = {
            nome: form.nome.value,
            email: form.email.value,
            mensagem: form.mensagem.value
        };

        console.log("Enviando mensagem:", formData);
        alert("Mensagem enviada com sucesso! (Simulação)");
        form.reset();
    });
}