/* question 6 */
const cats = [
    {
        name: 'Charlie',
        adoptionStatus: 'available'
    },
    {
        name: 'Lily',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Coco',
        adoptionStatus: 'available'
    },
    {
        name: 'Oreo',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Luna',
        adoptionStatus: 'available'
    },
    {
        name: 'Milo',
        adoptionStatus: 'available'
    },
    {
        name: 'Lola',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Leo',
        adoptionStatus: 'available'
    },
    {
        name: 'Willow',
        adoptionStatus: 'available'
    },
    {
        name: 'Bella',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Max',
        adoptionStatus: 'available'
    },
    {
        name: 'Cleo',
        adoptionStatus: 'available'
    },
    {
        name: 'Lucy',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Daisy',
        adoptionStatus: 'available'
    },
];

const adoptedCats = [];
const availableCats = [];

for (let i = 0; i < cats.length; i++)
{
    if (cats[i].adoptionStatus === 'available')
    {
        availableCats.push(cats[i].name);
    }
    else
    {
        adoptedCats.push(cats[i].name);
    }
}

const adoption_output = `These cats are adopted: ${availableCats.join(', ')}.`;
console.log(adoption_output);

/* question 7 */

const random_number = Math.random() * 10;
const ternaryValue = random_number > 5 ? "greater than 5!" : "less than five!";

console.log(`Random number: ${random_number}`);
console.log(ternaryValue);

/* question 8 */
const cat = {name: "Pinecone", age: 13, type: 'Munchkin', cuteness: 9001};

for (let property in cat) {
    console.log(`${property}: ${cat[property]}`);
}

/* question 9 */

if (1 == '1')
{
    console.log("true");
}

if (1 === '1')
{
    console.log("false");
}

/* question 10 */
const cats_cuteness = cats.map(function(cat) 
{
    return `${cat.name} is cute!`;
});
console.log(cats_cuteness);