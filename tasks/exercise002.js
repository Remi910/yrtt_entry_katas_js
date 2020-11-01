// The clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.
// Your task is to make the 'past' function return the time converted to milliseconds.
// More examples in the test cases below.

function past(h, m, s){
    // Your code here!
    var hoursElapse = 60*60*h;
    var minutesElapse = 60*m;
    var secondsElapse = hoursElapse + minutesElapse + s;
    return secondsElapse * 1000;
} 

module.exports = {
    past
};




