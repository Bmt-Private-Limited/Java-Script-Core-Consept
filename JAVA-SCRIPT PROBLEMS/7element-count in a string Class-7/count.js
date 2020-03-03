// CHEAK  HOW MANY WORD   ARE IN ONE SENTENCE**************************************************


// var speech ="hellow i am biswarup mandal.     i am from purulia and now live in south-24-pagana for study poepuse.";
// var count =0;
// for (var i = 0; i < speech.length; i++) {
//     var char = speech[i];
//     if (char == " " && speech[i-1] != " ")  {
//         count++
//     }
// }
// count++
// console.log(count);




// CHEAK  HOW MANY LETTER  ARE IN ONE SENTENCE**************************************************

// var sentence = "hello hello  hello hello hello hello hello";
// var count = 0;
// for(var i = 0; i < sentence.length; i++){
//     var letter = sentence[i];
//     if (letter != " " && sentence[i-1] != " ")  {
//         count++;
//     }
// }
// count++
// console.log(count);


// var sentence = "hello hello  hello hello hello hello hello";
// var count = 0;
// for(var i = 0; i < sentence.length; i++){
//     var letter = sentence[i];
//     if (letter =sentence && sentence[i-1] != " ")  {
//         count++;
//     }
// }

// console.log(count);



// CHEAK  HOW MANY TIMES ONE SPECIAL CHRACTER  ARE IN ONE SENTENCE**************************************************

var sentence = "hellow i am biswarup mandal.     i am from purulia and now live in south-24-pagana for study poepuse.";
var count = 0;
for(var i = 0; i < sentence.length; i++){
    var letter = sentence[i];
    if ( letter == "a" && sentence[i-1] != " ")  {
        count++;
    }
}
console.log(count);
