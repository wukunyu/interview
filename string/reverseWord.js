/**
 * leetcode: 反转字符串
 * 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
    示例 1:
    输入: "Let's take LeetCode contest"
    输出: "s'teL ekat edoCteeL tsetnoc" 
    来源：力扣（LeetCode）557
    链接：https://leetcode-cn.com/problems/reverse-words-in-a-string-iii
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
console.log(reverseCode(`Let's take LeetCode contest`));

