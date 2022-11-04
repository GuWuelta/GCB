function aninhamentosArray(matriz) {
  novaLista = matriz.reduce((list, sub) => list.concat(sub), []);
  return novaLista
}

matriz = [1, 2, [3], [4, 5]]

console.log("Array único: " + aninhamentosArray(matriz))

console.log(aninhamentosArray(matriz))


