/** 
* @Author : Murali.s <muralismmr94@gmail.com>.
* @Version :1.0.
* @purpose : It is used to reusage of methods instead of writing code duplications.
*/

/**
* @purpose : To create a node class with one argument constructor.
* @function : It is used to initialization the data value into the node. 
*/
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

/**
* @purpose :create a linked list functions to utilize the methods to the class.
* @function : It is used to create a supporting methods of Unordered list class.
*/
class LinkedList {
    constructor() {
        this.first = null;
        this.size = 0;
    }

    /**
     * @function: It is used to add the node in linked list.
     * @param : The user input Data is taken as parameter.
     */
    add(data) { 
        var node = new Node(data);
        if (this.first == null) {
            this.first = node;
            this.size++;

        }
        else {
            var temp = this.first;
            while (temp.next) {
                temp = temp.next;
            }
            this.size++;
            
            temp.next = node;
        }
    }

     /**
     * @function: It is used to search  the element node in linked list.
     * @param : The user input Data is taken as parameter.
     */
    search(item) {
        if (this.first == null) {
            return false;
        }

        var temp = this.first;
        while (temp) {
            if (temp.data == item) { 
                return true;
            }

            temp = temp.next;
        }
        return false;
    }

     /**
     * @function: It is used to add at the given position of the data node in linked list.
     * @param : The user input Data is taken as parameter.
     */
    addToPos(data) {
        var temp = this.first;
        var prev = temp;

        if (data < temp.data) {
            this.insertFirst(data);
            return
        }
        var node = new Node(data);
        while (temp.next) {
            if (temp.data < data) {
                prev = temp;
                temp = temp.next;
            }
            else {
                prev.next = node
                node.next = temp

                break;
            }
        }
        if (!temp.next) {
            temp.next = node;
        }
        this.size++;
    }

     /**
     * @function: It is used to remove the node in linked list.
     * @param : The user input Data is taken as parameter.
     */
    remove(data) {

        var temp = this.first;
        if (temp.data == data) {
            this.deleteFirst();
            return;
        }
        var prev = temp;
        while (temp) {
            if (temp.data == data) {
                prev.next = temp.next;
                this.size--;
                return temp.data;

            }

            prev = temp;
            temp = temp.next;
        }
        return null;
    }

     /**
     * @function: It is used to display the nodes in linked list.
     */
    display() {
        var temp = this.first;
        var str = "";
        while (temp) {
            str = str + " " + temp.data; 
            temp = temp.next;
        }
        return str;
    }
     /**
     * @function: It is used to check the node in linked list.
     */
    isEmpty() 
    { 
        return this.size == 0; 
    }

     /**
     * @function: It is used to add the first the node in linked list.
     * @param : The user input Data element is taken as parameter.
     */
    insertFirst(element) {    
        var n = new Node(element);
        if (this.head == null) {
          this.head = n;
          this.size++;
          return;
        } else {
          n.next = this.head;
          this.head = n;
          this.size++;
          return;
        }
      }

    /**
     * @function: It is used to delete  the node at first position in linked list.
     */
      deleteFirst() {             
        if (this.head == null) {
            return;
        }
        var n = this.head.element;
        this.head = this.head.next;
        this.size--;
        return n;
      }

    /**
     * @function: It is used to Print the node  elements in linked list.
     */
      printList() {
        try {
          var curr = this.head;
          var str = "";
          while (curr) {
            str += curr.data + " ";
            curr = curr.next;
          }
          return str;
        } catch (error) {
          console.log(error.message);
        }
      }

    /**
     * @function: It is used to add element at desired position in linked list.
     */
      addele(data) {
        try {
          var node = new Node(data);
          var current = this.head;
          if (this.head == null) {
            this.head = node;
          } else {
            current = this.head;
            while (current.next) {
              current = current.next;
            }
            current.next = node;
          }
          this.size++;
        } catch (error) {
          console.log(error.message);
        }
      } 
    /**
     * @function: It is used to remove  the node at desired position in linked list.
     */
      removeItem(data) {
        try {
          var current = this.head;
          var prev = null;
    
          while (current != null) {
            
            if (current.data == data) {
              if (prev == null) {
                this.head = current.next;
              } else {
                prev.next = current.next;
              }
              this.size--;
              return true;
            }
            prev = current;
            current = current.next;
          }
          return false;
        } catch (error) {
          console.log(error.message);
        }
      }

}
// ************************************ LinkedList1 **************************************/
class LinkedList1 {
    /**
     * Linked List class has two properties, where head stores the first node of a List,
     * and size indicates the number of nodes in a list.
     */
    constructor() {
      this.head = null;
      this.size = null;
    }

     /**
     * @function: It is used to add the node in linked list.
     * @param : The user input Data is taken as parameter.
     */
    add(data) {
      try {
        var node = new Node(data);
        var current = this.head;
        if (this.head == null) {
          this.head = node;
        } else {
          current = this.head;
          while (current.next) {
            current = current.next;
          }
          current.next = node;
        }
        this.size++;
      } catch (error) {
        console.log(error.message);
      }
    }
    /**
     * @function: It is used to search the node in linked list.
     * @param : The user input Data is taken as parameter.
     */
    search(data) {
      try {
        var temp = this.head;
        while (temp) {
          if (temp.data == data) {
            return true;
          }
          temp = temp.next;
        }
        return false;
      } catch (error) {
        console.log(error.message);
      }
    }

    /**
     * @function: It is used to remove item atdesired node in linked list.
     * @param : The user input Data is taken as parameter.
     */
    removeItem(data) {
      try {
        var current = this.head;
        var prev = null;
  
        while (current != null) {
          if (current.data == data) {
            if (prev == null) {
              this.head = current.next;
            } else {
              prev.next = current.next;
            }
            this.size--;
            return true;
          }
          prev = current;
          current = current.next;
        }
        return false;
      } catch (error) {
        console.log(error.message);
      }
    }
    
    /**
     * @function: It is used to print the list of node in linked list.
     * @param : The user input Data is taken as parameter.
     */
    printList() {
      try {
        var curr = this.head;
        var str = "";
        while (curr) {
          str += curr.data + " ";
          curr = curr.next;
        }
        return str;
      } catch (error) {
        console.log(error.message);
      }
    }
    
    /**
     * @function: It is used to insert  the node at desired position in linked list.
     * @param : The user input Data is taken as parameter.
     */
    insertAt(element, index) {
      try {
        if (index > 0 && index > this.size) return false;
        else {
          var node = new Node(element);
          var curr, prev;
          curr = this.head;
          if (index == 0) {
            node.next = this.head;
            this.head = node;
          } else {
            curr = this.head;
            var it = 0;
            while (it < index) {
              it++;
              prev = curr;
              curr = curr.next;
            }
            node.next = curr;
            prev.next = node;
          }
          this.size++;
        }
      } catch (error) {
        console.log(error.message);
      }
    }

    /**
     * @function: It is used to add  position the node in linked list.
     * @param : The user input Data and position number is taken as parameter.
     */
    addpos(arr, num) {
      try {
        for (let i = 0; i < arr.length - 1; i++) {
          if (arr[0] >= num) return 0;
          else if (arr[i] < num && arr[i + 1] > num) {
            return i + 1;
          }
        }
        return arr.length;
      } catch (error) {
        console.log(error.message);
      }
    }

    printShares() {
      var arr = [];
      if (this.head == null) {
        return null;
      } else {
        var temp = this.head;
        while (temp) {
          arr.push(temp.data);
          temp = temp.next;
        }
        return arr;
      }
    }
    
    removeStock(element) {
      var temp = this.head;
      var prev = null;
      while (temp != null) {
        var stock = temp.data;
        if (stock.name == element || stock.symbol == element) {
          if (prev == null) {
            this.head = temp.next;
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
  
module.exports = {
    LinkedList,LinkedList1,
}