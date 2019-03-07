

/* /*******************************************************************************************
 * Purpose      :   Prime Number Program and store only the numbers in that range that are 
 *                  Anagrams using Queue. 
 * 
 * @description
 * 
 * @file        :   primequeue.js
 * @overview    :   Store in Anagram numbers using Queue.
 * @author      :   Murali s <muralismmr94@gmail.com>
 * @version     :   1.0
 * 
 * ********************************************************************************************/
/**
 * To require the required files.
 */
try {
  var utilityDs = require("./Implementation/Qutil");
  var utility = require("./Implementation/utilnum");
  var readline = require("readline-sync");
  var util = require("util");
  var arr = [];
  var queue = new utilityDs.QueueLinked;
  for (let i = 0; i < 1000; i++) {
    if (utility.isPrime(i))
      arr.push(i);
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (utility.isAnagram(arr[i], arr[j])) {

        queue.enqueue(Number(arr[i]));
        queue.enqueue(Number(arr[j]));
      }
    }
  }
  console.log("Prime anagram queues are");
  for (let i = 0; i < arr.length; i++) {
    util.print(+queue.dequeue() + " ");

  }
} catch (error) {
  console.log(error.message);
}




