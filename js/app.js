//obteniendo solo los salarios
const salariosMx = mexico.map(persona => persona.salary);

//ordenando los salarios
const salariosMxSorted = salariosMx.sort((salaryA, salaryB) => salaryA - salaryB);

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

//mediana general
const medianaGeneralMx = calcularMediana(salariosMxSorted);

//obteniendo el top 10%
const spliceStart = (salariosMxSorted.length * 90) / 100;
const spliceCount = salariosMxSorted.length - spliceStart;
const salariosMxTop10 = salariosMxSorted.splice(spliceStart, spliceCount);

//mediana top 10%
const medianaTop10Mx = calcularMediana(salariosMxTop10);

console.log({
    medianaGeneralMx,
    medianaTop10Mx
})