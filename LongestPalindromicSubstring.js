/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {

    let start = 0;
    let end = 0;

    for (let i = 0; i < s.length; i++) {
        const odd = expand(s, i, i);
        const even = expand(s, i, i + 1);

        const longer = Math.max(odd, even);

        if (longer > end - start) {
            start = i - (longer - 1) / 2;
            end = i + longer / 2;

            i = end - 1;
        }
    }

    return s.substring(start, end);
};

const expand = function (string, left, right) {

    while (left > 0 && right < string.length && string[left] === string[right]) {
        left--;
        right++;
    }

    return right - left - 1;

};

console.log(longestPalindrome('babad'));