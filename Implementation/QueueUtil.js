/*
 * @purpose     :   Queue implementation and Deque implementation.
 * @overview    :   Queue implementation enqueue dequeue and display function.
 * @author      :   Murali  <muralismmr94@gmail.com>
 * @version     :   1.0
 */
class Queue {
/**
 *@function : It is used to create a queue constructor.
 */
    constructor() {
        this.items = [];
        this.size = 0;
        this.capacity;
        this.front = -1;
        this.rear = -1;
    }

    /**
     * @function  : It is used to create a node of stake.
     * @param     : It is used to create a queue capacity
     */
    stack(capacity) {
        this.capacity = capacity;
        var top = new items[capacity];
    }

    /**
     * @function  : It is used to add the element into the queue.
     * @param     : The data is used to add the element into the queue 
     */

    enque(data) {
       // console.log(data);
        if (this.top == this.capacity - 1) {
            console.log("Stack Overflow");
            return;
        }
        if (this.front == -1) {
            this.front++;
        }
        this.size++;
        this.items[++this.rear] = data;

    }
/**
 * @function  :It is used to delete  last element into the queue
 */
    deque() {
        if (this.front == -1) {
            console.log("Queue is empty");
            return null;
        }
        var element = this.items[this.front++];
        console.log(this.front)
        this.size--;
        if (this.front > this.rear) {
            this.front = this.rear = -1;
        }
        return element;
    }
/**
 * @function  : This method returns the size of an queue.
 */
    getSize() {
        return this.size;

    }

    /**
     * @function  :This method returns the true or false based up on the queue size.
     */
    isempty() {
        if (size == 0)
            return true;
        else
            return false;

    }

    /**
     * @function  :It shows the element into list of queue.
     */

    display() {
        var res = "";
        for (var i = this.front; i <= this.rear; i++) {
            var res = res + this.items[i];
            if (i < this.rear) {
                res = res + ",";
            }

        }
        return res;
    }

}
/**************************************** Deque ***************************************
 * @function    : It is used to deque function of the Queue
*/
class Deque {

  /**
   * @function  : It is used to deque constructor for initiailzation of deque.
   */
    constructor() {
      this.items = [];
    }

    /**
     * @function  : It is used to add element in to the queue front.
     * @param     :It is used to insert element  in to the queue.
     */

    addFront(element) {
      this.items.unshift(element);
    }
    
    /**
     * @function  : It is used to add element in to the queuelast.
     * @param     :It is used to insert element  in to the queue.
     */
    addRear(element) {
      this.items.push(element);
    }
    
    /**
     * @function  : It is used to remove element in to the queue.
     * @param     :It is used to removing element  in to the queue.
     */
    removeFront() {
      if (this.isEmpty()) return "underFlow";
      return this.items.shift();
    }
    
    /**
     * @function  : It is used to delete element in to the queue last.
     */
    removeRear() {
      return this.items.pop();
    }
    
    /**
     * @function  : It is used to check the element in to the queue.
     */
    isEmpty() {
      return this.items.length == 0;
    }
    
    /**
     * @function  : It is used to check the queue size list.
     */
    size() {
      return this.items.length;
    }
  }


module.exports ={ Queue,Deque};