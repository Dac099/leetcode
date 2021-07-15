/**
 * Merge two sorted linked lists and return it as a sorted list. 
 * The list should be made by splicing together the nodes of the first two lists.
 */
let l1 = [1,2,4];
let l2 = [1,3,4];
var mergeTwoLists = function(l1, l2) {
    for(let i = 0; i < l2.length; i++){
        l1.push(l2[i]);
    }

    //Ordenamiento por insercion [1,1,2,3,4,4]
    //recorrer el arreglo
        //El primer elemento se toma como el incio del arreglo ordenado
        //Se pasa al siguiente elemento y lo comparamos con el arreglo anterior
            //Si es menor 
                //lo guardamos en la variable key
                //el elemento con el que se comparo lo copiamos en la pocision del elemento que estamos examinando
                //a la variable kay la asinamos en la posicion de el elmento con el que lo comparamos
    let sorted = [];
    for(let i = 0; i < l1.length; i++){
        let key = l1[i + 1]; 
        let posicion = indice;
        for(let j = i; j >= 0; j--){
            if(key < l1[j]){
                l1[i + 1] = l1[j];
            }
        }
    }   

};

console.log(mergeTwoLists(l1,l2));