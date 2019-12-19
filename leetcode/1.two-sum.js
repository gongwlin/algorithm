// 两数之和
// nums = [2, 7, 11, 15] target = 9
/**
 * @param numbers: An array of Integer
 * @param target: target = numbers[index1] + numbers[index2]
 * @return: [index1, index2] (index1 < index2)
 */
const twoSum = function (numbers, target) {
    const temp = {};
    for (let i = 0, len = numbers.length; i < len; i++) {
        const diff = target - numbers[i];
        if (temp[diff] !== undefined) {
            return [temp[diff], i];
        } else {
            temp[numbers[i]] = i;
        }
    }
}

let nums = [2, 7, 11, 15], target = 9;
console.log(twoSum(nums, 9));