// lista encadeada

function listaEncadeada (){
    let head = null;
    let tail = null;
    let tamanho = 0;
    const Node = (valor) => {
        return {
            valor,
            next: null 
        };
    };

    const adicionar = (valor) => {
        if(!head){
           head = Node(valor);
           tamanho++;
           return head;
        }else{
            let node = head;
            while(node.next){
                node = node.next;
            }
            node.next = Node(valor);
            tamanho++;
            return node;
        }
    };

    const adicionar2 = (valor) => {
        if(!head){
            head = Node(valor);
            tail = head;
            tamanho++;
            return head;
         }
         else{
            let node = Node(valor);
            tail.next = node;
            tail = node;
            tamanho++;
            return node;
        }
    };

    const buscarPeloIndice = (indice) => {
        if(tamanho === 0 || indice >= tamanho)
        {
            return null;
        }

        let contador = 0;
        let node = head;
        while(contador < indice){
            node = node.next;
            contador++;
        }
        return node;
        
    };

    const buscarPeloValor = (valor) => {
        if(tamanho === 0){
            return null;
        }else{
            let node = head;
            while(node.next && node.valor !== valor){
                node = node.next;
            };
            return node;
        }
    };

    const remover = (node) => {
        if(tamanho === 0){
            return;
        }else if(node === head){
            return head = node.next;
        }else{
            let currentNode = head;
            console.log(currentNode);
            while(currentNode.next && currentNode.next !== node){
                currentNode = currentNode.next;
            }
            return currentNode.next = node.next;
        }
    };

    return {
        tamanho: () => tamanho,
        adicionar: (valor) => adicionar(valor),
        adicionar2: (valor) => adicionar2(valor),
        buscarPeloIndice: (indice) => buscarPeloIndice(indice),
        buscarPeloValor: (valor) => buscarPeloValor(valor),
        remover: (node) => remover(node),
        exibeLista: () => console.log(head)
    };
};

let lista = listaEncadeada();
lista.adicionar(1);
lista.adicionar(2);
lista.adicionar(3);
lista.adicionar(4);
let node = lista.buscarPeloValor(2);
lista.remover(node);
lista.exibeLista();