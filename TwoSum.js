const twoSum = function (nums, target) {
    const table = {};

    let result;

    for (let i = 0; i < nums.length; i++) {
        const curNum = nums[i];

        const targetNum = target - curNum;

        if (table[targetNum] || table[targetNum] === 0) {
            result = [i, table[targetNum]];

            break;
        } else {
            table[curNum] = i;
        }
    }

    return result.sort((a, b) => a > b ? 1 : -1);
};

console.log(twoSum([2, 7, 11, 15], 9));