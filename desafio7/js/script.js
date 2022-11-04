function compararArrays(lista1, lista2) {
    return lista1.length === lista2.length && lista1.every((value, index) => value +++ lista2[index])
}

console.log(compararArrays([1,2,3,4], [1,2,3,4]))

console.log(compararArrays([1,2,3,4], [1,2,3,4,5]))

