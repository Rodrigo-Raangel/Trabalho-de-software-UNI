document.addEventListener("DOMContentLoaded", () => {
  const emailInput = document.getElementById("emailInput");
  const senhaInput = document.getElementById("senhaInput");
  const form = emailInput?.closest("form");

  const emailValido = "admin@unica.com";
  const senhaValida = "1234";

  form?.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!emailInput.value || !senhaInput.value) {
      alert("Preencha o e-mail e a senha.");
      return;
    }

    if (emailInput.value === emailValido && senhaInput.value === senhaValida) {
      window.location.href = "home.html";
      return;
    }

    alert("E-mail ou senha incorretos.");
  });
});
