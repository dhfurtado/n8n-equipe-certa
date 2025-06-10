const URL_CANDIDATOS = "https://srdiadev-n8n-webhook.8qlb9b.easypanel.host/webhook/36835167-44f6-45fb-b72d-71f9e3694af8";
const URL_REQUISITOS = "https://srdiadev-n8n-editor.8qlb9b.easypanel.host/webhook-test/formulario";

// Tipos permitidos
const allowedTypes = [
  "text/csv",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
];

// Envio do arquivo de candidatos
document.getElementById("formCandidatos").addEventListener("submit", async e => {
  e.preventDefault();
  const file = document.getElementById("fileCandidatos").files[0];
  if (!file) {
    return alert("Selecione um arquivo CSV ou XLSX.");
  }
  if (!allowedTypes.includes(file.type)) {
    return alert("Tipo de arquivo inválido. Use CSV ou XLSX.");
  }
  await enviarArquivo(file, URL_CANDIDATOS);
});

// Envio do arquivo de requisitos
document.getElementById("formRequisitos").addEventListener("submit", async e => {
  e.preventDefault();
  const file = document.getElementById("fileRequisitos").files[0];
  if (!file) {
    return alert("Selecione um arquivo CSV ou XLSX.");
  }
  if (!allowedTypes.includes(file.type)) {
    return alert("Tipo de arquivo inválido. Use CSV ou XLSX.");
  }
  await enviarArquivo(file, URL_REQUISITOS);
});

// Função genérica para envio
async function enviarArquivo(file, url) {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      alert("Arquivo enviado com sucesso!");
    } else {
      alert("Erro ao enviar arquivo.");
    }
  } catch (err) {
    alert("Erro na requisição: " + err.message);
  }
}
