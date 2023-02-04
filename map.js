const numbers = [10, 9.5, 6, 8]

/* retorne num + 1, se fpr maior que 10 retorne 10 se não retorne num + 1 */
const numbers2 = numbers.map((num) => num + 1 > 10 ? 10 : num + 1
)

console.log(numbers2)
