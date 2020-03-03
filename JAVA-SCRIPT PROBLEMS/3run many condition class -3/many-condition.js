
// MAKE IT LATTER************************************************

// var a =7000;
// var b = 4000;
// var c = 50000;
// var d = 100000;

// if (a>b) {
//     if (a>c) {
//         console.log("a is bigger");
        
//     } else {
//         console.log("c is bigger");
        
//     }
// } else if (b>c){
//     if (b>d) {
//         console.log("b is bigger");
        
//     } else {
//         console.log("d is bigger");
        
// }     }
//     else{
//         if (c>d) {
//             console.log("c is bigger");
            
//         } else {
//             console.log("d is bigger");
            
//         }
//     }



var a =7000;
var b = 4000;
var c = 50000;
// PROCESS NO -1 TO MAKE MAX-VALUE BY EKTUAL JAVA-SCRIPT----------------------------------------
var max = Math.max(a, b, c)
console.log(max);

// PROCESS NO -2 TO MAKE MAX-VALUE BY if-else condition-------------------------------------
if (a>b) {
    if (a>c) {
        console.log("a is bigger");
        
    } else {
        console.log("c is bigger");
        
    }
} 
    else{
        if (b>c) {
            console.log("b is bigger");
            
        } else {
            console.log("c is bigger");
            
        }
    }
