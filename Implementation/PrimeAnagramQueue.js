
var UtlityDS = require('./DsUtilfull');
var Utility = require('/home/admin1/Desktop/myjavascript/Utility/utility.js')
var readline = require('readline-sync');
var arr=[];
var Q=new UtlityDS.LinkedListQueue;
for (let i =0; i<1000; i++) {
    if (Utility.isPrime(i))
        arr.push(i)
}
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (Utility.isAnagram(arr[i], arr[j])) {
            Q.enQueue(Number(arr[i]))
            Q.enQueue(Number(arr[j]))
        }
    }
}
  console.log(" Anagrams are :"+Q.printList());