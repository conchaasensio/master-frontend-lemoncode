console.log("************** DELIVERABLE 02 *********************");

//Concat

const boyNames = ['Pablo', 'Martín', 'Miguel'];
const girlNames = ['Sofía', 'Irene', 'Laura'];

const concat = (a, b) => [...a, ...b];

console.log(concat(boyNames, girlNames));

//Opcional

const neutralNames = ['Mati', 'Nico', 'Noah'];

const concatMultiple = (...args) => args.reduce((acc, element) => concat(acc, element), []);

console.log(concatMultiple(boyNames, girlNames, neutralNames));
