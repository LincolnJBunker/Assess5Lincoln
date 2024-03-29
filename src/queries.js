import { Op } from 'sequelize';
import { Animal, Human } from './model.js';

// Get the human with the primary key 2
export const query1 = await Human.findByPk(2);
// console.log(query1)

// Get the first animal whose species is "fish"
export const query2 = await Animal.findOne({
    where: { species: 'fish'}
})
// console.log(query2)

// Get all animals belonging to the human with primary key 5
export const query3 = await Animal.findAll({
    where: { human_id: '5'}
})
// console.log(query3)

// Get all animals born in a year greater than (but not equal to) 2015.
export const query4 = await Animal.findAll({
    where: {
        birth_year: { [Op.gt]: 2015 },
    }
})
// console.log(query4)

// Get all the humans with first names that start with "J"
export const query5 = await Human.findAll({
    where: {
        fname: { [Op.startsWith]: 'J'}
    }
})
// console.log(query5)

// Get all the animals who don't have a birth year
export const query6 = await Animal.findAll({
    where: {
        birth_year: { [Op.is]: null }
    }
})
// console.log(query6)

// Get all the animals with species "fish" OR "rabbit"
export const query7 = await Animal.findAll({
    where: {
        species: { [Op.or]: ["fish", "rabbit"] }
    }
})
// console.log(query7)

// Get all the humans who DON'T have an email address that contains "gmail"
export const query8 = await Human.findAll({
    where: {
        email: { [Op.notLike]: '%gmail%'}
    }
})
// console.log(query8)

// Continue reading the instructions before you move on!

// Print a directory of humans and their animals
export async function printHumansAndAnimals() {
    const pairs = await Human.findAll({ include: Animal });
    for (const pair of pairs) {
        const animals = pair.animals;
        console.log(pair.getFullName())
        for (const animal of animals) {
            console.log(animal.name, animal.species)
        }
    }
}


// Return a Set containing the full names of all humans
// with animals of the given species.
export async function getHumansByAnimalSpecies(species) {
    const humans = new Set();
    //add humans from data... but in which way?
    humans.add('Bob Personne')
    humans.add('Jane Doe')
    humans.add('Jasmine Debugger')
    humans.add('John Doe')
    humans.add('Jane Hacks')
    //need to write an if statement that if humans own one of species, to print them out
    if (species === Animal.species) {
        return humans.includes()
    }

    console.log(humans)
}

console.log(getHumansByAnimalSpecies('dog'))