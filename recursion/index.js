function func1(n) {
    if (n === 1) {
        return 1
    }
    return n * func1(n - 1)
}

function func2(n) { // 1,1,2,3,5,8,13...
    if (n <= 2) {
        return 1
    }
    return func2(n - 1) + func2(n - 2)
}

// 1,2,3,5,8
function f3(n) { // 小青蛙跳台阶 1,2 1:1, 2：11,2， 3:111,12，21， 4:1111,121,112,211,22, 5:111111,1112,1121,1211,122,2111,212,221
    if (n <= 1) {
        return 1
    }
    return f3(n - 1) + f3(n - 2)

}
console.log(f3(6))
// f(2) = 2*1 = 2*f(1)
// f3 = 3*2*1 = 3*f2 = 3*2*f1=3*2*1