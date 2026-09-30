const number = process.argv[2];
const color = process.argv[3];
const thing = process.argv[4];
const numbers = ['1','2','3','4','5','6','7','8','9','10'];
const colors = ['Red','Blue','Purple','Grey','Orange','Blue','Green','Yellow','Brown','Pink'];
const things = ['Book','Cap','Clock','Fork','Sock','Box','Chair','Cup','Pencil','Table'];
console.log(`${numbers[Number(number)]} ${colors[Number(color)]} ${things[Number(thing)]}`);
