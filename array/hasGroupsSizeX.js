/**
 * @param {number[]} deck
 * @return {boolean}
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
    Object.keys(map).forEach((key, i) => { // 6,9,12
        if (map[key] < 2) return false
        nums.push(map[key])
    })
    let min = Math.min(...nums),count = 0
    Object.keys(map).forEach(key => {
        for (let i = 2; i <= min; i++) {
            if (map[key] % i !== 0) {
                count = 0
            }else{
                break
            }
        }
        count++
    })
    return count === Object.keys(map).length
};

hasGroupsSizeX([1, 2, 3, 4, 4, 3, 2, 1])