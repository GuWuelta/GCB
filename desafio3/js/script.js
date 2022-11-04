function limpa_array(lista) {
    i = 0
    while (i < lista.length) {
        if (lista[i] == '' || lista[i] == 0 || lista[i] == null || lista[i] == undefined) {
            lista.splice(i, 1);
        } 
    i++
    }
    return lista
}

lista = [1, 0, '', undefined, 3, 10, null]

console.log(lista)

console.log(limpa_array(lista))