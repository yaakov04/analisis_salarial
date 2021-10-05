const esPar = num => num % 2 === 0;

const calcularPromedio = lista => {
    let sum = lista.reduce((suma, elemento) => suma + elemento);
    return sum / lista.length;
}

const calcularMediana = (lista) => {
    const mitadLista = lista.length / 2;
    if (esPar(lista.length)) {
        const promedio = calcularPromedio([lista[mitadLista], lista[mitadLista - 1]])
        return promedio;
    } else {
        const mediana = lista[Math.floor(mitadLista)]
        return mediana;
    }
}

const tenerTop10 = lista => {
    console.log(lista)
    const spliceStart = (lista.length * 90) / 100;
    const spliceCount = lista.length - spliceStart;
    salariosTop = lista.splice(spliceStart, spliceCount);
    console.log(salariosTop);
    return salariosTop;
}