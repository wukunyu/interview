/**
 * @param {number[]} deck
 * @return {boolean}
 * 给定一副牌，每张牌上都写着一个整数。
此时，你需要选定一个数字 X，使我们可以将整副牌按下述规则分成 1 组或更多组：
每组都有 X 张牌。
组内所有的牌上都写着相同的整数。
仅当你可选的 X >= 2 时返回 true。

示例 1：

输入：[1,2,3,4,4,3,2,1]
输出：true
解释：可行的分组是 [1,1]，[2,2]，[3,3]，[4,4]
示例 2：

输入：[1,1,1,2,2,2,3,3]
输出：false
解释：没有满足要求的分组。
示例 3：

输入：[1]
输出：false
解释：没有满足要求的分组。
示例 4：

输入：[1,1]
输出：true
解释：可行的分组是 [1,1]
示例 5：

输入：[1,1,2,2,2,2]
输出：true
解释：可行的分组是 [1,1]，[2,2]，[2,2]

提示：

1 <= deck.length <= 10000
0 <= deck[i] < 10000

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards
 */
var hasGroupsSizeX = function (deck) {
  if (deck.length < 2) return false

  let map = {}, nums = []
  for (let i = 0; i < deck.length; i++) {
    if (map[`${deck[i]}`]) {
      map[`${deck[i]}`]++
    } else {
      map[`${deck[i]}`] = 1
    }
  }
  // Object.keys(map).forEach((key, i) => { // 6,9,12 //forEach没有continue、break、return
  for (let key of Object.keys(map)) {
    if (map[key] < 2) return false
    nums.push(map[key])
  }
  let min = Math.min(...nums), n = 2, flag = false
  console.log(nums, map, min)
  while (n <= min) {
    let count = 0
    nums.forEach(num => {
      if (num % n === 0) {
        count++
      }
    })
    n++
    if (count === nums.length) {
      flag = true
    }
  }
  return flag
};