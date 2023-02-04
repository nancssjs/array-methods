const array = ['ilan', 'Bia', 'André', 1, 2, 3]

console.log(array)

const show = (name) => {
    if(array[0].includes(name)) {
        console.log(`No array contém '${name}'.`)
    } else {
        console.log(`No array não contem '${name}'.`)
    }
}

show(undefined)