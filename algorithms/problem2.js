//Given a string s containing just the characters: []{}(), determine if the input string is valid.
//An input is valid if: 
    //Open brackets be closed by the same type of brackets
    //Open brackets mus be closed in the correct order

//() : true
//(){}[] :true
//({[]}) :true

//(} :false
// ({)} :false


let s = "([{}])";

var isValid = function(s) {
    const brackets ={
        "(": ")",
        "{": "}",
        "[": "]"
    }
    let res = [];
    let arr = s.toString().split('');
    for(let i = 0; i < arr.length; i++){
        let br = arr[i];
        if(brackets[br]){
            res.push(br);
        }else{
            let chkBr = res.pop();
            if(brackets[chkBr] != br){
                return false;
            }
        }
    }
    if(res.length > 0){
        return false;
    }
    return true;
}

console.log(isValid(s));
//