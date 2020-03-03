var NamesList =["abi" , "debu" , "santanu" , "avi" , "biswarup" , "akash" , "bati" , "bati" ,"santanu" , "avi" ];
var UniqueNames = [];
for (var i = 0; i < NamesList.length; i++) {
    var element = NamesList[i];
    var ElementStore = UniqueNames.indexOf(element);
    if (ElementStore == - 1) {
        UniqueNames.push(element)
    }
    
}
console.log(UniqueNames);
