/** 
 * @Purpose     :   Search a element if present remove it otherwise add it to the file.
 * @file        :   orderedlist.js
 * @overview    :   Use readfile to read all the words in the file with space as seperator.
 * @author      :   Murali <muralismmr94@gmail.com>
 * @version     :   1.0
 */



      var readline = require('readline-sync');
      var access = require('/home/admin1/Desktop/myjavascript/Utility/utility.js');
      var accessDs = require('../Implementation/ListUtil');
      var fs = require("fs");
      try {
      var f = fs.readFileSync("/home/admin1/Desktop/myjavascript/DataStructure/file.txt", "utf8");
      var arr1 = f.trim().split(" ");
      var arr = [];
      for (let i = 0; i < arr1.length; i++) {
        arr[i] = parseInt(arr1[i]);
       }
      access.bubbleSort(arr);
      var linkedList = new accessDs.LinkedList1();
      for (let i = 0; i < arr.length; i++) {
        linkedList.add(arr[i]);
       }
      var contents = linkedList.printList();
      console.log("Data in the list: " + contents);
      var valid = false;
      do {
        var number = readline.questionInt("Enter the number: ");
        if (isNaN(number)) {
          console.log("Not a valid entry. Enter only numbers");
         }
        else {
          valid = true;
         }
      } while (!valid);
      var result = linkedList.search(number);
      console.log("number in the list: " + result);
      /**
       * Condition to check if the number is present in the list or not.
       * If it is present, remove the number from the list, else add the number to the list
       */
      if (result === true) {
        console.log(linkedList.removeItem(number));
        var output = linkedList.printList();
        access.writeFile("/home/admin1/Desktop/myjavascript/DataStructure/file.txt", output);
        console.log("Removed the number from the list since the number is already present ");
        console.log("New data: " + output);
       } 
      else {
        var position = linkedList.addpos(arr, number);
        linkedList.insertAt(number, position);
        var output1 = linkedList.printList();
        access.writeFile("/home/admin1/Desktop/myjavascript/DataStructure/file.txt", output1);
        console.log("Word added successfully ");
        console.log("New data: " + output1);
     }
  } 
  catch (error) {
      console.log(error.message);
  }