function filtrarArray(lista, valores) {
    i = 0
    j = 0
    while (i <= lista.length && j <= valores.length) {
        while (i <= lista.length || lista[i] == valores[j]) {
            lista.splice(i,1);
            i++;
        }
        j++
    }
    return lista
}

lista = [5, 4, 3, 2, 5]
valores = [5, 3]

console.log(filtrarArray(lista, valores))