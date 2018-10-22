// creating a hash table with the given size
function HashTable(size)
{
    this.buckets = new Array(size);
    this.numBuckets = this.buckets.length;
}

/* object creation with key , value
next property - will have the value as object or null
when more than one key-value pair points to already occupied index,
then will create a list or chain to append the key-value to that index(i.e next will have object as value)
otherwise it will be null
*/
function hashNode(key,value,next)
{
    this.key = key;
    this.value = value;
    this.next = next || null;
}
/*
 creating hash for the given key and return the index in which the key-value to be store
*/
HashTable.prototype.hashIndex = function(key)
{
    let hashCode = "";
    for(let i=0; i< key.length; i++)
    {
        hashCode += key.charCodeAt(i); 
    }
    console.log("hashcode"+hashCode);
    let index = hashCode % this.numBuckets;
    console.log("index"+ index);
    return index;
}
/*
Inserting the key-value to an index of array 
if the same key is insert again, it will not append instead
it will modify the value of the key
*/
HashTable.prototype.insert = function(key,value)
{
    let index = this.hashIndex(key);

    if(!this.buckets[index])
    { 

        // let why =  this.buckets[index];
        // why = new hashNode(key,value);
        /* very important to note here we cannot use a variable to store this.buckets[index]  
        since it will not point to the this.buckets[index] so use below to store
        */
        this.buckets[index] = new hashNode(key,value);

    }
    else if(this.buckets[index].key == key)
    {
        this.buckets[index].value = value; 
    }
    else
    {
        let currentNode = this.buckets[index];

        // traverse the next node is null
        while(currentNode.next)
        {
            // if key is present already , update the value alone
            if(currentNode.next.key == key)
            {
                currentNode.next.value = value;   
                return;
            }
            currentNode = currentNode.next;
            
        }
        currentNode.next = new hashNode(key,value);
        console.log("currentNode");
        console.log(currentNode);
    }
  
}
/*
getting the value for a given key
*/
HashTable.prototype.getNode = function(key)
{
    let index = this.hashIndex(key);
    var currentNode = this.buckets[index];
    while(currentNode)
    {
        if(currentNode.key == key)
        {
            return currentNode.value;
        }
        currentNode = currentNode.next;

    }
    return null;

}
HashTable.prototype.retrieveAll = function()
{
    let nodes = [];
    for(let i=0; i< this.numBuckets;i++)
    {
                 
        let currentNode = this.buckets[i];
        while(currentNode)
        {
            nodes.push(currentNode);
            currentNode = currentNode.next;
        }

    }
    return nodes;
}


// hash table
var k1 = "hanuman", k2 = "keerthi"; k3 = "haunman"; k4 = "nandhu";
var v1 = "hanu@gmail.com", v2 = "keerthi7@gaml.com"; v3 = "gandhi@gmail.com";
let HT = new HashTable(7);
console.log(HT.buckets);
HT.insert(k1,v1);
console.log(`....after inserting.....${k1}-${v1}....Hash table..........`);
console.log(HT.buckets);
console.log("------------------------------------------------------");
HT.insert(k2,v3);
console.log(`....after inserting.....${k2}-${v2}....Hash table..........`);
console.log(HT.buckets);
console.log("------------------------------------------------------");
HT.insert(k3,v3);
console.log(`...after inserting.....${k1}-${v2}....Hash table..........`);
console.log(HT.buckets);

HT.insert(k2,v2);
console.log(`...modifying the value for key.....${k2}-${v2}....Hash table..........`);
console.log(HT.buckets);

console.log(`....get..${k3} key....from Hash table..........`);
console.log(HT.getNode(k3));

console.log(`....get..${k4} key .....from Hash table..........`);
console.log(HT.getNode(k4));

console.log("------------------------retrieve all the hashnodes------------------------");
console.log(HT.retrieveAll());
