const letters = ['a', 'b', 'c', 'd', 'e']
const numbers = [1 ,2 ,3 ,4 ,5]

const lns = letters.filter((_, i) => {
    return numbers[i] >= 3
})

console.log(lns)