/**
 * Merge two sorted linked lists and return it as a sorted list. 
 * The list should be made by splicing together the nodes of the first two lists.
 */
let l1 = [1,2,4];
let l2 = [1,3,4];

var mergeTwoLists = function(l1, l2) {
    let controlLength = l1.length;
    for(let i = 0; i < l2.length; i++){
        l1[controlLength + i] = l2[i];
    }

    //Ordenamiento por insercion [1,1,2,3,4,4]
    for(let i =  1; i < l1.length; i++){
        let position = i;
        let value = l1[i];
        while(position > 0 && value < l1[position - 1]){
            l1[position] = l1[position - 1];
            position--;
        }
        l1[position] = value;
    }

    return l1;
};

console.log(mergeTwoLists(l1,l2));