console.log("************** DELIVERABLE 03 *********************");

//Clone
const source = {
  firstName: 'Concha',
  lastName: 'Asensio',
  country: 'Spain'
}

const clone = (source) => ({...source});

console.log(clone(source));

//Merge
const target = {
  firstName: 'Luis',
  age: 40,
  married: true
}

const merge = (source, target) => ({...target, ...source});

console.log(merge(source, target));
