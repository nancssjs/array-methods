const numbers = [11, 21, 31, 41, 51, 61]
let sum = 0
numbers.forEach((num, i) => {
    sum += num
    console.log(i, num)
})
console.log(sum)