/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
    // 로마 숫자 테이블
    const romanMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    const arr = s.split('');

    return arr.reduce((acc, item, index) => {
        // 현재 로마 숫자의 Integer 값
        const curVal = romanMap[item];
        // 다음 로마 숫자의 Integer 값
        const nextVal = romanMap[arr[index + 1]];

        // 다음값이 더 높을경우 현재값 뺄셈 아닐경우 덧셈
        if (nextVal > curVal) {
            acc -= curVal;
        }else{
            acc += curVal;
        }

        return acc;

    }, 0);
};