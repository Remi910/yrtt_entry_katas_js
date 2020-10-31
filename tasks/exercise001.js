// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. 
// Your task will be to return the sum of the numbers that occur only once.
// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15.
// More examples in the test cases below.

// Good luck!

function singles(arr){
    if (arr === undefined) throw new Error("array is required");
    // Your code here!
    
    arr.sort();
    //var singles = [];
    var numberAddition = 0;
    var arrLength = arr.length
        for (i = 0; i < arrLength; i++) {
    
          if (arr[i] == arr[i+1]) {
            i++;
        }
        else {
       //     singles.push(arr[i]);
       numberAddition = numberAddition + arr[i];
        }
        }
    console.log(numberAddition);
    return numberAddition;
    }


module.exports = {
    singles
};
