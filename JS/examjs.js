function start(){
    let rollStu = new Map(); 
    rollStu.set(1, "Ahment");
    rollStu.set(2, "Zarnia");
    rollStu.set(3, "Bedri");
 
    console.log(rollStu.has);
    console.log(rollStu.delete(1));


 console.log(rollStu.get(1)); // get the value based on key

rollStu.set("ok", "sefa");
rollStu.set("sok", "aziz");

console.log(rollStu);
console.log(rollStu.get('ok'));

let text = '';
rollStu.forEach(  function(value, key){

    text = text + key + '=' + value;
}
);

console.log(text);


console.log(rollStu.keys());
console.log(rollStu.values());
}