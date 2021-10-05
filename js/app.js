const lista = document.querySelector('.lista_salarios tbody'),
    btnAgregar = document.querySelector('#btn_agregar'),
    btnEliminarTodo = document.querySelector('#eliminar_todo');

//comprueba si la lista esta vacia
const listaVacia = lista => lista.children.length === 0;

const elementoLista = (salario) => {
    const fila = document.createElement('tr');
    fila.innerHTML = `
        <td>${salario}</td>
        <td><button data-tipo="eliminar_elemento" class="btn btn-red">Eliminar</button></td>
    `;
    return fila;
};

if (mexico) {
    for (let i = 0; i < mexico.length; i++) {
        const fila = elementoLista(mexico[i].salary);
        lista.appendChild(fila);
    }
}

const obtenerValor = (e) => {
    const form = e.target.parentElement;
    const valor = form.querySelector('input').value;
    if (valor === '' || valor < 1) {
        alert('Error!! El campo no es valido');
        return;
    }
    return valor;
}

const limpiarInput = (e) => {
    const form = e.target.parentElement;
    form.querySelector('input').value = '';
}

const agregarElementoLista = (e) => {
    e.preventDefault();
    const salario = obtenerValor(e);
    if (salario) {
        const fila = elementoLista(salario);
        lista.appendChild(fila);
        limpiarInput(e);
    }
};

const eliminarTodo = () => {
    lista.innerHTML = '';
}

const eliminarElemento = (e) => {
    //console.log(e.target);
    if (e.target.getAttribute('data-tipo') === 'eliminar_elemento') {

        const element = e.target.parentElement.parentElement;
        //console.log(element)
        element.remove();
    }
}

btnAgregar.addEventListener('click', agregarElementoLista);
btnEliminarTodo.addEventListener('click', eliminarTodo);
lista.addEventListener('click', eliminarElemento);