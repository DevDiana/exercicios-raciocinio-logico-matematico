// Uma editora utiliza 3 máquinas para produzir 1.800 livros num certo período.
// Quantas máquinas serão necessárias para produzir 5.400 livros no mesmo período?

// Na matemática eu resolvi: 3 * 5400 e x * 1800
// 1800x = 16.200
// x = 16.200/1800
// x= 9

function calcularMaquinas(nLivros1, maquinas1, nLivros2) {
  return (maquinas1 * nLivros2) / nLivros1;
}

// Dados fornecidos
let nLivros1 = 1800; // número de livros no primeiro período
let maquinas1 = 3; // número de máquinas no primeiro período
let nLivros2 = 5400; // número de livros desejados no segundo período

// Calculando o número de máquinas necessárias para produzir nLivros2
let maquinas2 = calcularMaquinas(nLivros1, maquinas1, nLivros2);

console.log(
  "São necessárias:",
  maquinas2,
  "máquinas para produzir",
  nLivros2,
  "livros."
);
