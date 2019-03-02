const read = require('readline-sync');
var ll = require('../DataStructure/Implementation/ListUtil');
var util = require('../Utility/utility');
try {
    var linklist = new ll.LinkedList();
    let data = util.fileCall('/home/admin1/Desktop/myjavascript/algorithmprograms/file1.txt');
    for (let index = 0; index < data.length; index++)
        linklist.add(data[index]);
        var display = linklist.display();
        //console.log(display);
    let name = read.question("Enter the data you want to search ");
    var check = linklist.search(name);
    console.log(check);
    if (check) {
        linklist.remove(name);
     }
    else {
        linklist.add(name);
     }
    var display = linklist.display();
    console.log(display);   
    util.writeFile('/home/admin1/Desktop/myjavascript/algorithmprograms/file1.txt', display)
} catch (err) {
    console.error(err);
}

