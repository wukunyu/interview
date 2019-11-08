/**
 * @param {number} numRows
 * @return {number[][]}
 * 1
 * 11
 * 121
 * 1331
 * 14641
 * 在杨辉三角中，每个数是它左上方和右上方的数的和。
 */
var generate = function(numRows) {

    let ret = [];
    for (let i = 0; i < numRows; i++) {
      ret[i] = [] // i=2,1
      for (let j = 0; j < i + 1; j++) {
        // 0,1,2
        if (j === 0 || j === i) {
          ret[i].push(1);
        } else {
          ret[i].push(ret[i - 1][j-1] + ret[i - 1][j]);
        }
      }
    }
    return ret
  };
generate(5)