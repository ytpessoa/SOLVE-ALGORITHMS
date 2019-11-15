const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN:1,
    EQUALS:0
};

function defaultCompare(a, b){
   if(a===b){
       return Compare.EQUALS; // 0
   }
   return (a<b) ? Compare.LESS_THAN: Compare.BIGGER_THAN; // -1 ou 1
}

class Node{
    constructor(key){
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    
    constructor(comareFn = defaultCompare){
        this.comareFn = comareFn; //para comparar valores dos nós
        this.root = null; //do tipo Node
    }

    insert(key){
        if (this.root == null){
            this.root = new Node(key)
        }
        else{
            this.insertNode(this.root,key)//achar um lugar correto pra inserir   
        }
    }   
    insertNode(node, key){     
        // caso 1: key < raiz : descer para esquerda        
        if( this.comareFn(key, node.key)===Compare.LESS_THAN){
            if(node.left === null){
                node.left = new Node(key)//caso de parada da descida
            }
            else{
                this.insertNode(node.left, key) //desce mais um nível
            }
        }        
        // caso 2: key > raiz : descer para esquerda
        else{
            if(node.right === null){
                node.right = new Node(key) //caso de parada da descida
            }
            else{
                this.insertNode(node.right, key) //desce um nível
            }
        }


    }

    //PERCORRENDO A ÁRVORE    
    //EM-ORDEM
    inorderTraverse(callback){
        this.inOrderTraverseNode(this.root, callback)
    }
    inOrderTraverseNode(node, callback){
        if(node != null){ // caso base:interrupção da 
            this.inOrderTraverseNode(node.left, callback)
            callback(node.key)
            this.inOrderTraverseNode(node.right, callback)
        }
    }

    //PESQUISANDO VALORES EM UMA ÁRVORE
    
    //VALOR MÍNIMO: ir pra esquerda da arvore
    min(){
        return this.minNode(this.root)
    }
    minNode(node){
        let current  = node;
        while(current != null && current.left!= null){
            current = current.left
        }
        return current.key
    }
    //VALOR ESPECIFICO
    search(key){
        return this.searchNode(this.root, key)
    }
    searchNode(node, key){
        if(node == null){
            return false
        }
        if(this.comareFn(key, node.key) === Compare.LESS_THAN){
            return this.searchNode(node.left, key); //descer pra esquerda
        }
        else if( this.comareFn(key, node.key) === Compare.BIGGER_THAN){
            return this.searchNode(node.right, key) //descer pra direita
        }
        else{ //key === node.key
            return true
        }

    }





}//fim classe BinarySearchTree




//main
const tree = new BinarySearchTree();
tree.insert(11)
tree.insert(15)
tree.insert(5)
tree.insert(3)
tree.insert(9)
tree.insert(8)
tree.insert(10)
tree.insert(13)
tree.insert(12)
tree.insert(14)
tree.insert(20)
tree.insert(18)
tree.insert(25)
tree.insert(6)

const callback = (value) => console.log(value)
//tree.inorderTraverse(callback)
console.log(tree.min())
console.log(tree.search(12))

