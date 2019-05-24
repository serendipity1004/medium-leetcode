/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
    // 마이너스 값이면 바로 false 리턴
    if (x < 0) {
        return false;
    }

    // Integer를 array화
    const arr = x.toString().split('');
    const length = (arr.length) / 2;

    for (let i = 0; i < length; i++) {
        const startCursor = arr[i];
        const endCursor = arr[arr.length - i - 1];

        // 두 커서의 값이 매칭이 안되면 바로 return false
        if (startCursor !== endCursor) {
            return false;
        }
    }

    // 문제 없을경우 return true
    return true;
};