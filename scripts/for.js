const numbers = [100, 200, 300, 400, 500, 600]
let sum = 0

console.log(`lista: ${numbers}.`)
for(let i=0; i<numbers.length; i++) {
    sum+=numbers[i]
    console.log(`indice ${i} = ${numbers[i]}.`)
}

const media = sum/numbers.length
console.log(`A soma: ${sum}. A media: ${media}.`)