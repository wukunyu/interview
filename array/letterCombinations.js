/**
 * @param {string} digits
 * @return {string[]}
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
示例:
输入："23"
输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number
 */
function letterCombinations(str) { // 23
    let map = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
    let code = str.split('') // 
    let arr = []
    if (!str) return [] // 输入''返回[]
    for (let i = 0; i < code.length; i++) {
        arr.push(map[code[i]])
    }

    let comb = arr => {
        if (arr.length === 1) return arr[0].split('') //输入1，返回['a','b','c']
        let tem = []
        for (let i = 0; i < arr[0].length; i++) {
            for (let j = 0; j < arr[1].length; j++) {
                tem.push(`${arr[0][i]}${arr[1][j]}`)
            }
        }
        arr.splice(0, 2, tem) // ['ghi',['','']]
        if (arr.length < 2) {
            // console.log(arr[0])
            return arr[0]
        } else {
            return comb(arr)
        }
    }
    return comb(arr)
}
letterCombinations('23456')