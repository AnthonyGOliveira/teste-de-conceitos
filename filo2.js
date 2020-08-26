//pilha filo (first in last out) com próprio metodo

function filo2 () {
    let pilha = [];

    const adiciona = (valor) => {
        pilha[pilha.length] = valor;
    };

    const remove = () => {
        if(pilha.length <= 0){
            return null;
        }else{
            pilha.splice(pilha.length - 1, 1);
        }
    };

    const exibe = () => {
        console.log(pilha);
    };

    return {
        adiciona: (valor) => adiciona(valor),
        remove: () => remove(),
        exibe: () => exibe()
    };
};

let pilha = filo2();

pilha.adiciona(1);
pilha.adiciona(2);
pilha.adiciona(3);
pilha.adiciona(4);

pilha.exibe();

pilha.remove();
pilha.remove();
pilha.exibe();