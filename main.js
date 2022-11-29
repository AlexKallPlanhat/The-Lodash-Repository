import _ from lodash;

const myList = [
    'Water',
    'Chicken',
    'Banana',
    'Banana',
    'Cake',
    'Water',
]

const myNewArray = _.difference(myList, ['Water', 'Banana'])
console.log(myNewArray)