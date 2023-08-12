function start(){

    let name ='Tech pro';
    let age=95;

    let time= 1.95;
    console.log(name);
    console.log(age);
    console.log(time);


    let n1= 1;
    console.log(n1/0); 
    // 1/0 = Error (in Aapex)
   
   // 1/0 = Infinity 



   n2=1;
   n3=n2/0;
   console.log(n3); // infity
   console.log(typeof n3); //number

   console.log(name/2); // NaN not a Number
//Boolean
 let isActive= true; // true
 let isOk= 5==6+4; //false

console.log(isActive);
console.log(isOk);


let AGE;
console.log(AGE); //undefined
console.log(typeof AGE);

let pet= null;
console.log(pet); // null

let ac='yes'; //string
ac=45; //integer
console.log(ac); // 45 integer


//type casting
let v1 = true; 
console.log(v1);  //true
console.log(typeof v1);  //boolean

let v2 = String(v1);   //boolean to String 
console.log(v2);  //true
console.log(typeof v2);

//oto type casting
console.log(6+2); //8
console.log("6"+"2") //62;
console.log("6"/"2"); //3


// type casting string to integer 
let a = "55"; 
console.log(typeof a);  //string

let b = Number(a);   //Type Casting  Number();
console.log(typeof b);  //number
console.log(a + 1);  //551  - - because of string + is concat
console.log(b + 1);  //56  - - becuse of number + is addition
console.log(a / 5);  //11  auto type casting
console.log(b / 5);   //11

// operators

let aa= 7;
let bb=2;
console.log(aa +bb); //9
console.log(aa - bb); // 5
console.log(aa * bb); // 14
console.log(aa  / bb); //3.5
console.log(aa % bb);//1
console.log(aa ** bb);// 49


console.log(aa + "c"); // 7c

console.log(++aa ); // 8 pre increment

console.log(bb++); //2  post increment  operation will be in next line
console.log(bb); //3 post increment 

console.log(bb + ++bb); // 3+ 4  post increment 
console.log(aa + ++aa); // 8+ 9  post increment 




let z= 10;
let x=10;
let v="10";

console.log(z==v); //true  // it is not type sensitive (chekcing value only)
console.log(z===v);//false  //it is type sensitive  (checking value and Type both)





}