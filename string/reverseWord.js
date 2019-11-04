
/**
 * leetcode: 反转字符串
 */
function reverseCode(str) {
  return str
    .split(' ')
    .map(item => {
      return item
        .split('')
        .reverse()
        .join('');
    })
    .join(' ');
}
console.log(reverseCode('Create React App Sample'));
