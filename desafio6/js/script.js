function novoArray(lista) {
    filtrado = lista.filter((item, index) => lista.indexOf(item) === index);

    return filtrado
}

lista = [1, 2, 3, 3, 2, 4, 5, 4, 7, 3]

filtrado = novoArray(lista)

console.log(filtrado);