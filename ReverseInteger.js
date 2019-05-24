/**
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {
    let isNeg = x < 0;

    let arr = isNeg ? (-1 *x).toString().split('') : x.toString().split('');

    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        const comp = arr.length - i - 1;

        const swap = arr[comp];
        arr[comp] = arr[i];
        arr[i] = swap;
    }

    const result = isNeg ? -1 * parseInt(arr.join('')) : parseInt(arr.join(''));

    if (result > Math.pow(2, 31) || result < -1 * Math.pow(2, 31)) {
        return 0;
    }else{
        return result;
    }
};

console.log(reverse(-123));