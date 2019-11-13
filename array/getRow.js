
/**
 * 给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。
 * @param {*} rowIndex 
 */
var getRow = function (rowIndex) {
    let ret = []
    for (let i = 0; i < rowIndex+1; i++) { 
        ret[i] = []
        for (let j = 0; j <= i; j++) {
            if(j===0 || j=== i){
                ret[i].push(1)
            }else{
                ret[i].push(ret[i-1][j-1]+ret[i-1][j])
            }
        }
    }
    return ret[rowIndex]
    console.log(ret)
};