//fila ou fifo (first in first out)
//utilizando metodos do javascript

function fifo (){
    let fila = [];

    const adicionar = (valor) => {
        fila.push(valor);
    };

    const remover = () => {
        fila.shift();
    };

    const exibe = () => {
        console.log(fila);
    };

    return {
        adicionar: (valor) => adicionar(valor),
        remover: () => remover(),
        exibe: () => exibe()
    };
};