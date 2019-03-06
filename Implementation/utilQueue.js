
class LinkedListQueue {
    constructor() {
        this.tail = null;
        this.head = null;
    }
    /**
     * To add an element into the rear of the queue.
     * @param {any} item
     */
    enQueue(item) {
        /**
         * Create a node by passing the item
         */
        let node = new Node(item);
        /**
         * If there are no head and tail, point the data to head and tail
         */
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            /**
             * We just move the tail pointer
             */
            this.tail.next = node;
            this.tail = node;
        }
    }
    /**
     * To remove an item from the queue.
     */
    deQueue() {
        if (!this.head) {
            return "No item";
        } else {
            let itemToPop = this.head;
            this.head = this.head.next;
            return itemToPop.data;
        }
    }
    /**
     *return true if the queue is empty.
     */
    isEmpty() {
        return this.size() < 1;
    }
    /**
     * Returns the size of the queue
     */
    size() {
        let current = this.head;
        let counter = 0;
        while (current) {
            counter++;
            current = current.next;
        }
        return counter;
    }
    printList() {
        var st = ""
        var temp = this.head
        while (temp) {
            //console.log(temp.data)
            st = st + " " + temp.data
            temp = temp.next
        }
        return st;
    }
    printShares()
    {
      var arr = [];
      if (this.head == null) 
      {
        return null;
      } else 
      {
        var temp = this.head;
        while (temp) 
        {
          arr.push(temp.data);
          temp = temp.next;
        }
        return arr;
      }
    }
    /**
     * To remove the share from the stock
     * @param {any} element 
     */
  
    removeStock(element) 
    {
      var temp = this.head;
      var prev = null;
  
      // iterate over the list
      while (temp != null) {
        // comparing element & if found then remove
        var stock = temp.data;
        if (stock.name == element || stock.symbol == element) {
          if (prev == null) {
            this.head = temp.next;
          } else {
            prev.next = temp.next;
          }
          /**
           * To decrement the size of the LinkedList
           */
          this.size--;
          return temp.data;
        }
        prev = temp;
        temp = temp.next;
      }
      return -1;
    }
  }
  module.exports={LinkedListQueue};
  