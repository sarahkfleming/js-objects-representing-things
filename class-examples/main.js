// When you use the keyword "this" in reference to an enclosing object, you cannot use arrow functions

const rufusTheDog = {
    age: 4,
    species: "Dalmatian",
    contentsOfStomach: [],
    eat: function (item) {
        this.contentsOfStomach.push(item)
    },
    puke: function () {
        this.contentsOfStomach.length = 0
    },
    bark: function (something) {
        window.alert(`Rufus barks 'WOOF!' at ${something}`)
    }
}

rufusTheDog.eat("Mailman")

console.log(rufusTheDog.contentsOfStomach)

