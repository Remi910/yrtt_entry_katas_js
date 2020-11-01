// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigLatin(str){
    // You code here!
    var splittedString = str.split(); 
    splittedString.reverse();
    return splittedString.toString() + ay++;
}

module.exports = {
    pigLatin
};


