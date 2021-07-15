/** 
 * Write a function to find the longest common prefix amongst an array of strings
 * If there is no common prefix, return an empty string
 * 
 * input: strs = ["flower", "flow", "flifht"];
 * output: "fl"
 * 
 * Only lower case letters
*/

//Arreglo de palabras
strs = ["flower","flow","flight"];
let acc = "";
let control = true;

//Funcion para verificar que todas las palabras sean minusculas
function checkLower(string){
    return string === string.toLowerCase();
}

//Funcion para verificar que todas las palabras sean menores a 200 caracteres
function checkLength(string){
    return string.length < 200;
}

/**
 * Creamos un acumulador
 * Recorrer la primer palbra del arreglo
 * Creamos una variable auxiliar
 *      En la variable auxiliar vamos a ir guardando cada letra de la primer palabra
 * Vamos a recorrer todo el arreglo
 *      varificar si todas las palabras contienen esa letra en la posicion del ciclo inicial
 *      Si todas tienen esa letra, la agregamos 
 */
if(strs.every(checkLower) && strs.length < 200 && strs.every(checkLength)){
    for (let i = 0; i < strs[0].length; i++){
        //Auxiliar para referenciar cada letra de la primer palabra del arreglo
        let aux = strs[0][i];

        //En este ciclo recorremos el arreglo y comparamos cada elemento con nuestro auxiliar 
        for(let j = 1; j < strs.length; j++){
            //Si el auxiliar no coincide con la palabra, control es falso y se rompe el ciclo
            if(strs[j][i] != aux){
                control = false;
                break;
            }
        }

        //Si no cambio el valor de control, al acumulador se le agrega la auxiliar, de lo contrario de cierra el ciclo.
        if(control === true){
            acc += aux;
        }else{
            break;
        }
    }

}else{
    acc = "";
}


strs = ["flower","flow","flight"];
var longestCommonPrefix = function(strs) {
    let acc = "";
    let control = true;
    
    function checkLower(string){
        return string === string.toLowerCase();
    }
    
    function checkLength(string){
        return string.length < 200;
    }
    
    if(strs.every(checkLower) && strs.length < 200 && strs.every(checkLength)){
        for (let i = 0; i < strs[0].length; i++){
            let aux = strs[0][i];

            for(let j = 1; j < strs.length; j++){
                if(strs[j][i] != aux){
                    control = false;
                    break;
                }
            }

            if(control === true){
                acc += aux;
            }else{
                break;
            }
        }

    }else{
        acc = "";
    }
    return acc;
};

console.log(longestCommonPrefix(strs));