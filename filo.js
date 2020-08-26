//pilha filo(first in, last out)

function filo(){
    let pilha = [];

    const adiciona = (valor) => {
        pilha.push(valor);
    };

    const remove = () => {
        if(pilha.length <= 0){
            return null;
        }else{
            pilha.pop();
        }
    };

    const exibe = () => {
        console.log(pilha);
    };

    return{
        adiciona: (valor) => adiciona(valor),
        remove: () => remove(),
        exibe: () => exibe()
    };
}