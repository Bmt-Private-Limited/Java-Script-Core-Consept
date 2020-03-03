var marks = [140,2650, 3240, 25440, 525460, 6254680, 7250, 80, 900, 100]
var max = [0]
for (var i = 0; i < marks.length; i++) {
    var element = marks[i];
    if (element > max) {
        max =element
    }
    
}
console.log("heigst value " +max);
