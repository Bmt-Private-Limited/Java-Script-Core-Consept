// normal concatenate----------------------------------------------------------

// const array1 = [10, 20, 30, 40, 50] ;
// const array2 = [60, 70, 80, 90, 100];
// const array3 = [110, 120, 130, 140, 150,] ;
// const JoinArray = array1.concat(array2).concat(array3).concat(123456789);
// console.log(JoinArray);


// Spread operator****************************************************************

// const array1 = [10, 20, 30, 40, 50] ;
// const array2 = [60, 70, 80, 90, 100];
// const array3 = [110, 120, 130, 140, 150,] ;
// const JoinArray = [...array1, ...array2, ...array3, 123456789];
// console.log(JoinArray);


//basic process to find out max-Number

const Businessman = 5000;
const minister = 10000;
const sochib = 20000;
const maximum =Math.max(Businessman, minister, sochib) ;
console.log(maximum);

//find out the max number by spread operator

const maxNumber = [5000, 10000, 20000]
const maximum2 =Math.max(...maxNumber) ;
console.log(maximum2);
 