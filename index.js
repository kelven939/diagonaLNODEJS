let diagonal = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
let soma = 0;
for (let i = 0, j = diagonal.length - 1; i < diagonal.length && j >= 0; i++, j--) {
  console.log(diagonal[i][j]);
  if (diagonal[i][j] % 2 == 0) {
    soma += diagonal[i][j];
  }
}
console.log("soma de dos valores do diagonal secundaria:");
console.log(soma);