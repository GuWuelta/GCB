function dividirArray(lista, quantidade) {
  var resultado = [[]];
  var grupo = 0;

  for (var i = 0; i < lista.length; i++) {
    if (resultado[grupo] === undefined) {
      resultado[grupo] = [];
    }

    resultado[grupo].push(lista[i]);

    if ((i + 1) % quantidade === 0) {
      grupo = grupo + 1;
    }
  }

  return resultado;
}

lista = [1, 2, 3, 4, 5]
dados = []
quantidade = 2

dados = dividirArray(lista, quantidade);
console.log(JSON.stringify(dados));