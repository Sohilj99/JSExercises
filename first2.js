/* 
String-1 -- firstTwo
Given a string, return the string made of its first two chars, so the String "Hello" yields "He". 
If the string is shorter than length 2, return whatever there is, so "X" yields "X", and the empty string "" yields the empty string "".
Note that str.length() returns the length of a string.

Examples

firstTwo('Hello') → He
firstTwo('abcdefg') → ab
firstTwo('ab') → ab
*/




function isCorrect(expected, actual){
    if(expected===actual){
        return 'CORRECT';
    }
    return 'WRONG';
}


function first2(str){
    if(str.length<2){
        return str;
    }
    return str.substring(0,2);
}



// TEST CASES

console.log("firstTwo('Hello') → He: ", isCorrect('He', first2('Hello')));
console.log("firstTwo('') →  :", isCorrect('', first2('Bye')));
console.log("firstTwo('abcdefg') → ab: ", isCorrect('ab', first2('abcdefg')));
