module.exports = function reverse(n) {
    if (n < 0) n = -n;

    let array = new Array();
    while (n != 0) {
        array.push(n % 10);
        n = (n - (n % 10)) / 10;
    }
    return array.join("");
};
