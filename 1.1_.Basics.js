let lines = "\n";

let num = 5;

let init = num % 2 === 0 ? num + 1 : num;

//let aux = '';

let final = init + 12;

for (let i = init; i < final; i = i + 2) {
    lines = lines + i;
};
console.log(lines);