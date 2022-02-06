module.exports = function reverse (n) {
    let i = 0;
    let nToAbsoluteValue = Math.abs (n);
    let nToSting = nToAbsoluteValue.toString();    
    let reversedNumber = '';    
    while (i < nToSting.length) {
        reversedNumber = nToSting[i] + reversedNumber;
        i = i + 1;
    }
    return reversedNumber;
}