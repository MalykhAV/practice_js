function findPair(s) {
    for(i = 0; i < s.length; i++){
        if(pairDudes === "()"||pairDudes=== "{}"||pairDudes === "[]"){
            return i;
        }    
    }
    return false;
}

var isValid = function(s) {
    let positionOfPair = findPair(s);
    
    while(s != ""){

    }
//     for(let i = 0; i < s.length;i++){
//         if((s[i]+s[i+1]) === "()"||(s[i]+s[i+1])=== "{}"||(s[i]+s[i+1]) === "[]"){
//             let newS = s.substring(0, i) + s.substring(i+2);
//             console.log(newS);
//             for(let j = 0; j < newS.length; j++){
//                 if((newS[j]+newS[j+1]) === "()"||(newS[j]+newS[j+1])=== "{}"||(newS[j]+newS[j+1]) === "[]" ) {
//                     return true;
//                 }
//             } 
//         }
        // else {
        //     let newS = newS + s[i];
        //     console.log(newS);
        // }
        
            // for(let j = 0; j < newS.length; i++){
            //    if(!((newS[i]+newS[i+1]) === "()"||(newS[i]+newS[i+1])=== "{}"||(newS[i]+newS[i+1])) === "[]" ) {
            //    return false;
            //     }
            // }
        
//     }
//     return false;
// };
console.log(findPair("()"));
console.log(findPair("[()]"));
console.log(findPair("[()()]"));
console.log(findPair("{[()]}"));
console.log(findPair("[[[]"));
console.log(findPair("[]]]"));
console.log(findPair("()())"));