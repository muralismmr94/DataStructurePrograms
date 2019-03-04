/*
 * @purpose     :   Queue implementation.
 * @overview    :   Queue implementation enqueue dequeue and display function.
 * @author      :  Murali  <muralismmr94@gmail.com>
 */
class Queue {

    constructor() {
        this.items = [];
        this.size = 0;
        this.capacity;
        this.front = -1;
        this.rear = -1;
    }
    stack(capacity) {
        this.capacity = capacity;
        var top = new items[capacity];
    }

    enque(data) {
        console.log(data);
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

    deque() {
        if (this.front == -1) {
            console.log("Queue is empty");
            return null;
        }
        var ele = this.items[this.front++];
        console.log(this.front)
        this.size--;
        if (this.front > this.rear) {
            this.front = this.rear = -1;
        }
        return ele;
    }

    getSize() {
        return this.size;

    }

    isempty() {
        if (size == 0)
            return true;
        else
            return false;

    }

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
// **************************************** Deque ***************************************
class Deque {
    constructor() {
      this.items = [];
    }

    addFront(element) {
      this.items.unshift(element);
    }
    
    addRear(element) {
      this.items.push(element);
    }
    
    removeFront() {
      if (this.isEmpty()) return "underFlow";
      return this.items.shift();
    }
    
    removeRear() {
      return this.items.pop();
    }
    
    isEmpty() {
      return this.items.length == 0;
    }
    
    size() {
      return this.items.length;
    }
  }


module.exports ={ Queue,Deque};