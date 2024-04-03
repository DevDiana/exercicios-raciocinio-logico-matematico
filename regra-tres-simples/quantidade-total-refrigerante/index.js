// Uma das bebidas mais consumidas no mundo é o refrigerante.
// Durante o verão, devido às altas temperaturas, o consumo dessa bebida tende a ser maior e, com isso, uma fabricante local da cidade de Juazeiro do
// Norte decidiu aumentar a produção da bebida. Sabendo que ele consegue produzir e engarrafar 4.000 refrigerantes em 8 horas, qual será o tempo necessário de
// trabalho para produzir
// 5.000 refrigerantes?

// Na matemática fiz: 4000 * x e 8 * 5000
//4000x = 40.000   x=40000/4000 x=10horas

function quantidadeRefrigerante() {
  let qntRefrigerante = 4000;
  let tempo = 8;
  let quantidadeNecessaria = 5000;
  let resultado = (quantidadeNecessaria * tempo) / qntRefrigerante;
  console.log(
    `São necessário: ${resultado} horas para produzir 5.000 refrigerantes`
  );
}
quantidadeRefrigerante();
