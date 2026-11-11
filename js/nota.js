function calcularMedia() {
  const idsDasNotas = [
    "Nota_Fundamentos_da_Programação",
    "Nota_Sistemas_Operacionais",
    "Nota_Tecnologia_Para_Front-END_Com_Logica_Imperativa",
    "Nota_Linguagem_de_Programação",
    "Nota_Estrutura_de_Dados",
    "Nota_Banco_de_Dados",
  ];

  const notas = idsDasNotas.map((id) => {
    const elemento = document.getElementById(id);

    if (!elemento) {
      throw new Error(`Elemento da nota não encontrado: ${id}`);
    }

    return Number.parseFloat(elemento.textContent);
  });

  if (notas.some(Number.isNaN)) {
    throw new Error("Uma ou mais notas não são números válidos.");
  }

  const media = notas.reduce((soma, nota) => soma + nota, 0) / notas.length;
  const elementoMediaCurso = document.getElementById(
    "Nota_Coeficiente_de_Rendimento"
  );
  const elementoMediaHome = document.getElementById(
    "Nota_Coeficiente_de_Rendimento_Home"
  );

  if (!elementoMediaCurso || !elementoMediaHome) {
    throw new Error("Elemento do coeficiente de rendimento não encontrado.");
  }

  elementoMediaCurso.textContent = media.toFixed(2);
  elementoMediaHome.textContent = media.toFixed(2);

  return media;
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", calcularMedia);
} else {
  calcularMedia();
}
