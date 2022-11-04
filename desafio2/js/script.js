function inverte_lista2(lista) {
    i = 0
    subtracao = 1
    lista_invertida = []
    while (i < lista.length) {
        valor = lista.length - subtracao;
        lista_invertida.push(lista[valor]);
        i++;
        subtracao++;
    }
    return lista_invertida
}

lista = [1,2,3,4]

console.log("Array original: " + lista)
console.log("Array invertida: " + inverte_lista2(lista))
