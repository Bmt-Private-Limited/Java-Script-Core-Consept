// normal single parameter(function declare by a variable name)

// const number =function(num) {          
//     return num*2
// }
// const totel = number(9);
// console.log(totel);


// normal double parameter

// function number(num1,num2) {          
//     return (num1 + num2) * 2
// }
// const totel = number(9,9);
// console.log(totel);



// single parameter

// const number = num => num * 2 ; 
// const totel = number(9);
// console.log(totel);


// double parameter

// const number2 = (x , y) => (x + y) * 2 ; 
// const totel2 = number2(9 , 9);
// console.log(totel2);


// // without parameter

// const number3  =() => 5;
// const totel3 = number3();
// console.log(totel3);


//  //  double parameter multiple work

const doMath =  (x , y) =>{
    const sum = x + y ;
    const diff = x - y ;
    const result = sum * diff;
    return result;
}

const result = doMath(50 , 40);
console.log(result);





