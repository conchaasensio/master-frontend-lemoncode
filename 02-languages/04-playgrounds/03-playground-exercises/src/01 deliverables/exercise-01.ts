console.log("************** DELIVERABLE 01 - Array Operations *********************");

//Head

const andalusianCities = ['Almería', 'Granada', 'Córdoba', 'Jaén', 'Málaga', 'Sevilla', 'Cádiz', 'Huelva'];

const head = (list) => {
  const [first] = list;
  return first;
}

console.log(head(andalusianCities));


//Tail
const tail = (list) => {
  const [, ...rest] = list;
  return rest;
}

console.log(tail(andalusianCities));

//Init
const init = (list) => list.slice(0, -1);
console.log(init(andalusianCities));


//last
const last = (list) => list.at(-1);
console.log(last(andalusianCities));




