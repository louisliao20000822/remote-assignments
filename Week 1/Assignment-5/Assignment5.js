function count(input) {
    // your code here
    let obj = {};
    for(let i=0;i<input.length;i++){
        if(obj[input[i]])
            obj[input[i]]++;
        else{
            obj[input[i]] =1;
        }    
    }

    return obj;
}
let input1 = ["a", "b", "c", "a", "c", "a", "x"];

console.log(count(input1));
// should print {a:3, b:1, c:2, x:1}
function groupByKey(input) {
// your code here
    let obj = [];
    for(let i=0;i<input.length;i++){
        if(obj.find(e => e.key === input[i].key)){
            obj.find(e => e.key === input[i].key).value+= input[i].value;
        }
        else{
            obj.push(input[i]);
        }
    }    
    return obj;
}

let input2 = [
    { key: "a", value: 3 },
    { key: "b", value: 1 },
    { key: "c", value: 2 },
    { key: "a", value: 3 },
    { key: "c", value: 5 },
];
console.log(groupByKey(input2));