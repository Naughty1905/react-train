function moreZeroes(string) {
    let arrAscii = string
        .split('')
        .map(element => element.charCodeAt(0).toString(2));
    let final = arrAscii
        .filter(element => element.split('0').join('').length <= 3)
        .map(element => parseInt(element, 2).toString())
        .map(element => String.fromCharCode(element))
        .filter((v, i, a) => a.indexOf(v) === i);
    return final;
}

console.log(moreZeroes('abcdeabcde'));
