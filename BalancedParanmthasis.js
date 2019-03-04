/**
 * @Purpose     :   Take an Arithmetic Expression such as have balanced paranthesis or not
 * @overview    :   Use readfile to read all the words in the file with space as seperator.
 * @author      :   Murali <muralismmr94@gmail.com>
 * @version     :   1.0
 */   

var Utility=require('../DataStructure/Implementation/StackUtil');
var read=require('readline-sync');

function Stack(){
var st = new Utility.Stack;
    var str = read.question("Enter your mathematical expression with parantheses : ");
    var ch, i;

    for (i = 0; i < str.length; i++) {
        ch = str.charAt(i);

        if (ch == '(' || ch == '[' || ch == '{') {
            st.push(ch);

        }
        else {
            switch (ch) {
                case ')':
                 if (st.pop() != '(') {
                    return false;
                    }
                break;
                case ']': 
                 if (st.pop() != '[') {
                    return false;
                 }
                break;
                case '}': 
                 if (st.pop() != '{') {
                    return false;
                 } 
                break;
            }
        }


    }
    if (st.getSize() == 0) {
        return true;
    }
    return false;
}
var bol = Stack();
 
if (bol) {
    console.log("Mathematical expression is balanced");

}
else {
    console.log("Mathematical expression not balanced");
}