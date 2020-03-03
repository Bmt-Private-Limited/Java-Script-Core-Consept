function revarseString(str) {
 var revarse = "";
 for (var i = 0; i < str.length; i++) {
     var char = str[i];
     revarse = char + revarse;
 }   return revarse;
}

var statement = "ab cd";
var forAlign = revarseString(statement);

console.log(forAlign);
