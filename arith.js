const add = (a, b) => a + b;
const mul = (a, b) => a * b;
const sub = (a, b) => a - b;
const div = (a, b) => { if (b==0){
    throw new Error("you are trying to divide by 0!!!");
}
return a / b};

module.exports = { add, mul, sub, div };