// Na pandemia de covid-19, uma confecção se dedicou à fabricação de máscaras de tecido.
// Quando a confecção tinha 8 funcionários, o total de máscaras produzidas diariamente era de 184 máscaras.
// Com o objetivo de atingir uma produção de 500 máscaras diárias, quantos funcionários no mínimo devem ser contratados a mais?

// Na matemática fiz a conta assim: 8 * 500 e x * 184
// 184x = 4000  x=400/184 x = 21

function quantidadeFuncionario() {
  let funcionarioExistente = 8;
  let mascaraExistente = 184;
  let mascaraDesejada = 500;

  // Calculando a quantidade de funcionários necessários para produzir 500 máscaras diárias
  let funcionariosNecessarios =
    (funcionarioExistente * mascaraDesejada) / mascaraExistente;

  console.log("Funcionários adicionais necessários:", funcionariosNecessarios);
}

quantidadeFuncionario();
