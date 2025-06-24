const repeatString = function(str, num) {
    if (num < 0) {
        return 'ERROR';
    }
    let outputString = '';
    for (let i = 0; i < num; i++) {
        outputString += str;
    }
    return outputString;
};

// Do not edit below this line
module.exports = repeatString;