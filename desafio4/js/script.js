function converterArray(matriz) {
    objeto = Object.assign({}, matriz)

    return objeto
}

matriz = [["Aluno 1", "Gustavo"],["Aluno 2", "Rafael"],["Aluno 3", "Leonardo"]]

console.log(converterArray(matriz))