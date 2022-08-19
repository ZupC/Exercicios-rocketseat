// sistema de notas escolares

let score = 100;
function getScore(score) {
  let scoreA = score >= 90 && score <= 100;
  let scoreB = score >= 80 && score <= 89;
  let scoreC = score >= 70 && score <= 79;
  let scoreD = score >= 60 && score <= 69;
  let scoreE = score >= 50 && score <= 59;
  let scoreF = score <= 49 && score >= 0;
  let notaFinal;

  if (scoreA) {
    notaFinal = "A";
  } else if (scoreB) {
    notaFinal = "B";
  } else if (scoreC) {
    notaFinal = "C";
  } else if (scoreD) {
    notaFinal = "D";
  } else if (scoreE) {
    notaFinal = "E";
  } else if (scoreF) {
    notaFinal = "F";
  } else {
    notaFinal = "Nota invalida";
  }
  return notaFinal
}

console.log(getScore(score));