/*****************************************************************************************
 * @Purpose     :   Stack implementation.
 * @file        :   StackUtil.js
 * @overview    :   Stack implementation push pop peek and display function.
 * @author      :   Murali <muralismmr94@gmail.com>
 * @version     :   1.0
*/
class Stack {
    constructor() {
        this.items = [];
        this.size = 0;
        this.capacity;
        this.top = -1;
    }

    /**
     * @function  : This function is used initialization the class. 
     * @param     : capacity is used to create an n size stake. 
     */
    stack(capacity) {
        this.capacity = capacity;
        var t = new items[capacity];
    }

    /**
     * @function  : This method is used  to insert the values into the stack
     * @param     : The data is use to insert the value of the data.
     */
    push(data) {
        if (this.top == this.capacity - 1) {
            console.log("Stack Overflow");
            return;
        }
        this.size++;
        this.items[++this.top] = data;
    }

    /**
     * @function  : This method is used  to delete the values into the stack 
     */
    pop() 
    {
        if (this.top == -1)
            console.log("stack is empty");
            this.size--;
        return this.items[this.top--];
    }

    /**
     * @function  : This method is used to pick the element in to the stack.
     */
    peak() {
        if (this.top == -1)
            console.log("stack is empty");
        else
            console.log(this.items[top]);
    }

    /**
     * @function  :This method is used to get the size of stack.
     */
    getSize()
    {
        return this.size;

    }

    /**
     * @function  : this function is used to check the stack is empty or not.
     */
    isEmpty() {
        if (size == 0)
            return true;
        else
            return false;

    }

    /**
     * @function  : It shows the items list in stack.
     */
    display() {
        var st = "";
        for (let i = 0; i < this.size; i++) {
            st = st + " " + items[i];
        }
    }

    /**
     * @function  : This method is returns the reverse order of the stack present list.
     * @param     : The method is take an input array of items.
     */
    reversStack(items) {
        var newstack = new Stack;
        var n = this.getSize();
        for (let index = 0; index < n; index++) {
            newstack.push(this.pop());
        }
        return newstack;

    }
    
}
//*************************************** Stacks ***********************************************

/**
 * @function  : this method is used to create a node class .
 */
class SNode {
  /**
   * @function  : This constructor is used to create an initialization of snode function.
   * @param {*} data 
   */
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  /**
   * @function  : This  class is used to create a Stack methods inside the class.
   */
  class Stacks {
    constructor() {
      this.top = null;
    }

    /**
     * @function  : This method is used  to insert the values into the stack
     * @param     : The data is use to insert the value of the data.
     */
       push(item) {
      try {
        let node = new SNode(item);
        if (this.top) {
          node.next = this.top;
          this.top = node;
        } else {
          this.top = node;
        }
      } catch (error) {
        console.log(error.message);
      }
    }


    /**
     * @function  : This method is used  to delete the values into the stack 
     */
    pop() {
      try {
        if (this.top) {
          let itemToPop = this.top;
          this.top = this.top.next;
          return itemToPop.data;
        } else {
          console.log("Stack is empty!");
          return false;
        }
      } catch (error) {
        console.log(error.message);
      }
    }

    /**
     * @function  : This method is used to pick the element in to the stack.
     */
    peak() {
      try {
        if (this.top) {
          return this.top.data;
        } else {
          return null;
        }
      } catch (error) {
        console.log(error.message);
      }
    }
    
    /**
     * @function  : this function is used to check the stack is empty or not.
     */
    isEmpty() {
      return this.length > 1;
    }

    /**
     * @function  : it returns the size of the stack.
     */
    size() {
      let current = this.top;
      let counter = 0;
      while (current) {
        counter++;
        current = current.next;
      }
      return counter;
    }

    /**
     * @function  : It shows the items list in stack.
     */
    print() {
      try {
        var string = "";
        var temp = this.top;
        while (temp != null) {
          string = string + " " + temp.data;
          temp = temp.next;
        }
        return string;
      } catch (error) {
        console.log(error.message);
      }
    }

    /**
     * @function  : It is used to print the stack array.
     */
    printShares(){
      var arr = [];
      if (this.top == null) {
        return null;
      } else {
        var temp = this.top;
        while (temp) {
          arr.push(temp.data);
          temp = temp.next;
        }
        return arr;
      }
    }

    /**
     * @function  : It is used to remove of an Stack elements.
     * @param {*} element 
     */
    removeStock(element) {
      var temp = this.top;
      var prev = null;
      while (temp != null) {
       var stock = temp.data;
        if (stock.name == element || stock.symbol == element) {
          if (prev == null) {
            this.top = temp.next;
          } else {
            prev.next = temp.next;
          }
          this.size--;
          return temp.data;
        }
        prev = temp;
        temp = temp.next;
      }
      return -1;
    }
  }

  /**
   * @function :It is used to exports the methods.
   */
module.exports={Stack,Stacks}
