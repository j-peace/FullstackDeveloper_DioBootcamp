let lines = gets().split("\n");

let num = parseInt(lines.shift());

let init = num % 2 === 0 ? num + 1 : num;

let final = init + 12;

for (let i = init; i < final; i = i + 2) {
    lines = lines + i;
    œ
    console.log(i);
}