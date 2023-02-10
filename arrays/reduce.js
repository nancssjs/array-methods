const numbers = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]

const numbers2 = numbers.reduce((acc, number) => acc + number, 0)

console.log(`A soma dos numeros é: ${numbers2} e a média é: ${numbers2/numbers.length}`)