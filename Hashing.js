/*****************************************************************************************
 
 * Purpose      :   Create a Slot of 10 to store Chain of Numbers that belong to each Slot
 *                  to efficiently search a number from a given set of number 
 * @description
 * 
 * @file        :   hashing.js
 * @overview    :   Modulus of 10 remainders are stored particular index.
 * @author      :   Murali s  <muralismmr94@gmail.com>
 * @version     :   1.0
 * 
 * *************************************************************************************/
/**
 * To require the required files.
 */
var access = require("./Implementation/ListUtil");
var readline = require("readline-sync");
var util = require("util");
var filestream = require("fs");
var utility = require("../Utility/utility");
/**
 * function defination
 */
function hashing() {
  try {
    var fileRead = filestream.readFileSync("hashnumber.txt", "utf8");
    var numArray = fileRead.split(" ");
    var arr = [];
    for (let i = 0; i < numArray.length; i++) {
      var n = Number(numArray[i]);
      var remainder = n % 10;
      if (arr[remainder] === undefined) {
        arr[remainder] = new access.LinkedList();
        arr[remainder].add(n);
       } 
      else {
        arr[remainder].add(n);
       }
    }
    var str = "";
    for (let index = 0; index < 10; index++) {
      util.print(index + " slot: ");
      try {
        console.log(arr[index].display());
       } 
      catch (err) {
        console.log("empty index");
       }
    }
    console.log();
    var valid = false;
    do {
      var number = readline.questionInt("Enter the number you want to search \n");
      if (isNaN(number) || number < 0) {
        console.log("Enter positive number only greater than zero");
       } 
      else {
        valid = true;
       }
    } while (!valid);
    remainder = Number(number % 10);
    console.log("Remainder is " + remainder);
    if (arr[remainder] === undefined) {
      arr[remainder] = new access.LinkedList();
     }
    if (arr[remainder].search(Number(number))) {
      console.log("The number is present in the file");
      arr[remainder].remove(number);
     } 
    else {
      console.log("Number is not in the file");
      arr[remainder].add(number);
     }
     
    var flag;
    for (let index = 0; index < 10; index++) {
      flag = true;
      util.print(index + " result slot: ");
      try {
        console.log(arr[index].display());
        str = str + arr[index].display();
       }
      catch (err) {
        console.log("Empty index");
       }
    }
    console.log(str);
    utility.writeFile("hashnumber.txt", str);
    console.log("\n\n");
  } 
  catch (error) {
    console.log(error.message);
   }
}
/**
 * function calls.
 */
hashing();