// Linked list - creation of object with the properties of head and tail using constructor function 
function linkedList()
{
    this.head = null;
    this.tail = null;
}
// creation of node object with properties value,prev,next
function createNode(value,prev,next)
{
    this.value = value;
    this.prev = prev;
    this.next = next;

}
// add the node to the head of the list

linkedList.prototype.addToHead = function(value)
{
    var newNode = new createNode(value,null,this.head);
    if(this.head)
    {
        this.head.prev = newNode;
    }
    else 
    {
       this.tail = newNode;
    }

    this.head = newNode;
    
}
// add the node to the tail of the list

linkedList.prototype.addToTail = function(value)
{
    var newNode = new createNode(value,this.tail,null);
    if(this.tail)
    {
        this.tail.next = newNode;
    }
    else
    {
        this.head = newNode;
    }
    this.tail = newNode;
}

// remove the header node from list
linkedList.prototype.removeHeader = function()
{
    
    
    if(!this.head)
    {
        return  null;
    }

    let value = this.head.value;
    this.head = this.head.next;
    if(this.head)
    {
        this.head.prev = null;
    }
    else
    {
        this.tail = null;
    }
    
    return value;
}


// remove tail node from the list

linkedList.prototype.removeTail = function()
{
    if(!this.tail)
    {
        return null;
    }
    let value = this.tail.value;
    this.tail = this.tail.prev;
    if(this.tail)
    {
        this.tail.next = null;
    } 
    else
    {
        this.head = null;
    }
    return value;
}

// search the given node if it is present ,return true. else return false
linkedList.prototype.findNode= function(value)
{
    let ptr = this.head;
    while(ptr)
    {
        if(ptr.value != value)
        {
            ptr = ptr.next;
            continue;
        }
        return true;
      
    }
    return false;
}
/* 
searching start from end. so the indexes also numbered from the tail (tail index as 0 and goes on)
*/
linkedList.prototype.getIndexesOfNode = function(searchValue)
{
    let indexes = [];
    let count = 0;
    // we can start from header or tail

    let ptr = this.tail;
    while(ptr)
    {
        if(ptr.value == searchValue)
        {
            console.log(" index is "+count)
            indexes.push(count);
        }
        ptr = ptr.prev;
        count = count+1;
    }
    return indexes;
}



var LL = new linkedList();
// console.log(`Linked list with empty ${JSON.Stringify(LL)}`);
console.log(LL);
// adding first node to LL
LL.addToHead(1);
console.log("......................after adding node-1  val = 7 to header ...............");
console.log(LL);

// adding to tail
LL.addToTail(1);
console.log("....................... after adding node-3  to tail .................... ");
console.log(LL);

// adding second node to LL
LL.addToHead(3);
console.log("........................after adding node-2 val = 3 to header................");
console.log(LL);

// search a node
let status = LL.findNode(1);
console.log("........................search a node 1 ................");
console.log(status);
// search a node
status = LL.findNode(7);
console.log("........................search a node 7 ................");
console.log(status);

// getting indexes of the given node if it is present
status = LL.getIndexesOfNode(1);
console.log("........................get the indexes of the given node ................");
console.log(status);


// remove the header
let hv = LL.removeHeader();
console.log(".......................remove the header.................................... ");
console.log(hv);
console.log(LL);

// remove tail 
let tv = LL.removeTail();
console.log("........................remove the tail..............................");
console.log(tv);
console.log(LL);



