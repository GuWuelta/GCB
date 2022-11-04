function valoresComuns(lista1, lista2) {
  i = 0;
  j = 0;
  novaLista = [];
  while (i <= lista1.length && j <= lista2.length) {
    if (lista1[i] == lista2[j]) {
      novaLista.push(lista1[i]);
      i++;
    } else {
      i++
    }
    if (i > lista1.length) {
      i = 0;
      j++;
    }
  } 
    return novaLista
  }

  function limpa_array(novaLista) {
    i = 0
    while (i < novaLista.length) {
        if (novaLista[i] == undefined) {
            novaLista.splice(i, 1);
        } 
    i++
    }
    return novaLista
}

lista1 = [6, 8]
lista2 = [9, 7, 6, 8]

novaLista = valoresComuns(lista1, lista2)
limpa_array(novaLista)
console.log("Números em comum nas listas: " + novaLista)
console.log(novaLista)
