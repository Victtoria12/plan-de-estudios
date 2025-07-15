const correlatividades = {
  "Inglés": { cursar: "-", rendir: "-" },
  "Cálculo I": { cursar: "-", rendir: "-" },
  "Álgebra I": { cursar: "-", rendir: "-" },
  "Matemática y Computación I": { cursar: "-", rendir: "-" },
  "Matemática Discreta": { cursar: "3", rendir: "3" },
  "Álgebra II": { cursar: "3", rendir: "3" },
  "Seminario": { cursar: "-", rendir: "-" },

  "Cálculo II": { cursar: "2-3", rendir: "2-3" },
  "Fundamentos": { cursar: "5-7", rendir: "2-3-5-7" },
  "Probabilidad y Estadística": { cursar: "2-3", rendir: "2-3-5-7" },
  "Cálculo III": { cursar: "6-8", rendir: "2-3-6-7-8" },
  "Cálculo Numérico": { cursar: "2-3-4", rendir: "2-4-6" },
  "Modelos Matemáticos": { cursar: "2-5-6", rendir: "2-3-5-6-8" },

  "Matemática y Computación II": { cursar: "11-12", rendir: "2-4-6 11-12" },
  "Álgebra III": { cursar: "6-9", rendir: "6-9" },
  "Cálculo Avanzado I": { cursar: "9-11", rendir: "6-8-11" },
  "Cálculo Avanzado II": { cursar: "16", rendir: "16" },
  "Álgebra IV": { cursar: "15", rendir: "15" },

  "Variable Compleja y Análisis de Fourier": { cursar: "16", rendir: "11 16" },
  "Medida e Integración": { cursar: "16", rendir: "11 16" },
  "Materia Optativa I": { cursar: "(*)", rendir: "(*)" },
  "Ecuaciones de Física-Matemática": { cursar: "19-20", rendir: "16 19-20" },
  "Geometría Diferencial": { cursar: "17 6-9", rendir: "9-17" },
  "Materia Optativa II": { cursar: "(*)", rendir: "(*)" }
};

function verDetalle(materia) {
  let corr = correlatividades[materia];
  if (!corr) {
    alert("Materia no encontrada.");
    return;
  }
  alert(
    `Correlatividades para ${materia}:\n\n📌 Para cursar: ${corr.cursar}\n📌 Para rendir: ${corr.rendir}`
  );
}
