/**
 * @param {string} s
 * @return {number}
 */
const shorterWay = function (s) {
    const length = s.length;

    const map = {};
    let longest = 0;

    // substring 윈도우의 왼쪽끝
    let i = 0;
    // substring 윈도우의 오른쪽끝
    let j = 0;

    while (j < length) {

        const endChar = s[j];

        // Map에 substring의 오른쪽 끝 캐릭터가 이미 저장되어있을경우
        // 해당 캐릭터의 인덱스 + 1 만큼 i 인덱스를 이동시킵니다.
        if (map[endChar]) {
            i = Math.max(map[endChar], i);
        }

        longest = Math.max(longest, j - i + 1);
        map[endChar] = j + 1;

        j++;
    }

    return longest;
};

const longerWay = function (s) {
    const length = s.length;
    const set = new Set();

    // substring 윈도우의 왼쪽끝
    let i = 0;
    // substring 윈도우의 오른쪽끝
    let j = 0;
    let longest = 0;

    while (i < length && j < length) {
        const endChar = s[j];

        if (!set.has(endChar)) {
            // 캐릭터가 없을경우 세트에 추가해주고 가장 긴 길이를 갱신
            set.add(s[j++]);
            longest = Math.max(longest, j - i);
        } else {
            // 캐릭터가 있을경우 세트에서 substring 윈도우의 왼쪽 끝 캐릭터 삭제
            set.delete(s[i++]);
        }
    }

    return longest;
};

console.log(longerWay('pwwkew'));