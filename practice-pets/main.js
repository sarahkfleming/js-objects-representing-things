// Practice: Represent your Pet
// Create an object that represents your pet.

// Name property with a string value.
// Species property with a string value.
// Nicknames property with an array value. Array contains strings.
// Age property with an integer value
// Practice: Pet Sounds
// Now that you have an object that represents your pet, it's time to add some behavior. Pick three behaviors that your pet has and add three kys to your pet object. Each key's value should be a function that logs to the console or displays a window alert. Your choice.

// For example, if your pet is a dog, you could add a bark property, and the function would window.alert("WOOF!").

const fuzzy = {
    name: "Fuzzy",
    species: "Cat",
    nicknames: ["Fuzz", "Squeakers"],
    age: 3,
    eat: function () {
        console.log("Yummy!")
    },
    sleep: function () {
        console.log("Zzzzz")
    },
    meow: function () {
        console.log("Squeak squeak")
    },
    favoriteToys: [],
    play: function (toy) {
        if (toy.includes("catnip")) {
            this.favoriteToys.push(toy)
        }
    },
}

// Once you have define the properties, invoke each behavior. For example:

// angus.bark()
// angus.whine()
// angus.pant()
fuzzy.eat()
fuzzy.sleep()
fuzzy.meow()


// Practice: My Pet "This"
// Give your pet a new key named favoriteToys whose value is an empty array.
// Now define another new key named play whose value is a function with a single parameter named toy.
// The function should determine if your pet liked the toy, and if s/he does, then it should be added to the favoriteToys array using the this keyword (see example above).
// Here's an example. If your pet is a cat, then he likely only likes furry toys, so you could put an if..then condition in the play() method that checks if the word "fuzzy" is in the argument value. If it is, it gets added to the array.

fuzzy.play("catnip banana")