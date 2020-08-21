//fila fifo (first in first out) utilizando metodos próprios

function fifo2 () {
    let fila = [];

    const adicionar = (valor) => {
        fila[fila.length] = valor;
    };

    const remover = (valor) => {
        if(fila.length > 0){
            fila.splice(0, 1);
        }else{
            return null;
        }
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

let novaFila = fifo2();

novaFila.adicionar(1);
novaFila.adicionar(2);
novaFila.adicionar(3);
novaFila.adicionar(4);
novaFila.adicionar(5);

novaFila.exibe();

novaFila.remover();
novaFila.remover();

novaFila.exibe();