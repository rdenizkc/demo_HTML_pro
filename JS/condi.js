function start(){
    const arr = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [[10, 11, 12], 13, 14]
      ];
      
      const subarray = arr[3];
      const nestedSubarray = arr[3][0];
      const element = arr[3][0][1];
      console.log(element);
      console.log(nestedSubarray);
      console.log(subarray );

      const myArray = [["John", 23], ["cat", 2]];

      myArray.push(["dog", 3],[[566,"nm"],89]);
console.log(myArray);



const mySet=new Set();

mySet.add(1);
mySet.add(12);
mySet.add("ac");
console.log(mySet);

console.log(mySet.size);

mySet.forEach( function(values){console.log(values);});

let res= 0;

for(const a of mySet.values()){

    if(a>res){
        res = a;
    }
console.log(res);
}

let nums = [1, 4, 5, 6, 7, 8, 9]; 
  console.log(nums[0]);   //1st element using index

  console.log(nums[nums.length - 1]); 

nums[3]=24;

console.log(nums);



let numbers = new Array(1,2,3,4, 5, 81 , 89);  //numbers.length  = 7
 

for( let i =numbers.length-1 ; i >=0 ; i--){

   console.log(numbers[i]);
}


    
    var m = 1; 

     var a = 10 ;

      if(m>0){
        var a  = 15;
         console.log(a); //15
      }
      console.log(a);  //10

let s=`Good Morning EveryOne we are doing good in \"JS\"`;

console.log(s);

let msg = 'Good Morning we are doing good in \'JS\'  ';


   //there are two ways to access the specific chars

   console.log(msg[0]) //1st   G
   console.log(msg[5]);  //M  to find the based on index. 

   console.log( msg.at(0)  );  //G
   console.log( msg.at(5)  );  //o
}