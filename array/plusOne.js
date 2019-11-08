/**
 * @param {number[]} digits
 * @return {number[]} [9] = [1,0]
 * 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。

最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

你可以假设除了整数 0 之外，这个整数不会以零开头。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/plus-one
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
var plusOne = function(digits) {
  //考虑到精度丢失
  // return Number(digits.join(''))+1 //(String(Number(digits.join(''))+1)) //.split('').map(item=>Number(item))
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
    if (i === 0) {
      digits.unshift(1);
      return digits;
    }
  }
};

console.log(plusOne([9, 9, 9, 9, 9, 9]));
