let listObj = {
    0: "zero",
    1: "one",
    2: "two",
    length: 3,
};

let arr = [].slice.call(listObj);
console.log(arr);
