// constructor function
function BST(value)
{
    this.value = value;
    this.left = null;
    this.right = null;
}

// inserting node
BST.prototype.insert = function(value)
{
    if(value <= this.value)
    {
        if(!this.left)
        {
            this.left = new BST(value);
        }
        else
        {
            this.left.insert(value);
        }
    }
    else if(value > this.value)
    {
        if(!this.right)
        {
            this.right = new BST(value);
        }
        else
        {
            this.right.insert(value);
        }
    }
}

// checking a node is present or not
BST.prototype.contains = function(value)
{
    // if BST is empty then return null
    if(!this.value)
    {
        return false;
    }
    // if the node value is equal return true
    else if(this.value == value)
    {
        return true;
    }
    // if it is greater , route to right side of the tree
    else if(value > this.value)
    {
        // if there is no node in right side, then return null
        if(!this.right)
        {
            return false;
        }
        else
        {
            // since it is recursion we have to get the value from base. and return the same
            let status = this.right.contains(value);
            return status;
        }     
        
    }
    // if it is lesser , router to left side of the tree
    else if(value < this.value)
    {
        // if there is no node in left side, then return null
        if(!this.left)
        {
            return false;
        }
        else
        {
            // since it is recursion we have to get the value from base.
            let status = this.left.contains(value);
            return status;
        }
        
    }
    
}

/*
 Depth first Traversal in-order => {left,root or parent ,right}
*/

BST.prototype.depthFirstTraversalInorder = function(iterativeFun)
{
    if(this.left)
    {
        this.left.depthFirstTraversalInorder(iterativeFun)
    }
    iterativeFun(this.value);
    if(this.right)
    {
        this.right.depthFirstTraversalInorder(iterativeFun);
    }
    
}

/*
 Depth Traversal pre-order => {parent,left,right}
*/

BST.prototype.depthFirstTraversalPreorder = function(iterativeFun)
{
    iterativeFun(this.value);
    if(this.left)
    {
        this.left.depthFirstTraversalPreorder(iterativeFun);
    }
    if(this.right)
    {
        this.right.depthFirstTraversalPreorder(iterativeFun);
    }

}

/*
Depth traversal post-order => {left,right,parent}
*/
BST.prototype.depthFirstTraversalPostorder = function(iterativeFun)
{
    if(this.left)
    {
        this.left.depthFirstTraversalPostorder(iterativeFun);
    }
    if(this.right)
    {
        this.right.depthFirstTraversalPostorder(iterativeFun);
    }
    iterativeFun(this.value);
}

/* 
Depth traversal for pre-order,post-order,in-order in a single function
*/
BST.prototype.depthFirstTraversal = function(iterativeFun,order)
{
    
    if(order === "pre-order")
    {
        iterativeFun(this.value);
    }
    if(this.left)
    {
        this.left.depthFirstTraversal(iterativeFun,order);
    }
    
    
    if(order === "in-order")
    {
        iterativeFun(this.value);
    }
    if(this.right)
    {
        this.right.depthFirstTraversal(iterativeFun,order);
    }

    if(order === "post-order")
    {
        iterativeFun(this.value);
    }
}

/* 
Breadth First Traversal or level traversal
*/

BST.prototype.breadthFirstTraversal = function(iterativeFun)
{
    let nodeQueue = [this];
    while(nodeQueue.length)
    {
        let node = nodeQueue.shift();
        iterativeFun(node);
        if(node.left)
        {
            nodeQueue.push(node.left);
        }
        if(node.right)
        {
            nodeQueue.push(node.right);
        }
    } 
}

// console the node value
function nodeValue(value)
{
    console.log(value);
}

function nodeValueForBreadthTraversal(node)
{
    console.log(node.value);
}

/* 
Find the maximum node value
*/

BST.prototype.getMaxValue = function()
{
    if(!this.right)
    {
        return this.value;
    }
    else
    {
        return this.right.getMaxValue();
    }
}

/* 
Find Minimum node Value
*/

BST.prototype.getMinValue = function()
{
    if(!this.left)
    {
        return this.value;
    }
    else
    {
        return this.left.getMinValue();
    }
}





/* root node is 50
   other nodes {30,70,20,45,60,100,10,35,59,85,105}
*/
var bstNode = new BST(50);
console.log(bstNode);

bstNode.insert(30);
bstNode.insert(70);
bstNode.insert(20);
bstNode.insert(45);
bstNode.insert(60);
bstNode.insert(100);
bstNode.insert(10);
bstNode.insert(35);
bstNode.insert(59);
bstNode.insert(85);
bstNode.insert(105);


console.log("---------------after inserting nodes---------");
console.log(bstNode);

let fValue = 35; 
let status = bstNode.contains(fValue);
console.log("-------------bst contains status-----------"+fValue+status);

fValue = 77; 
status = bstNode.contains(fValue);
console.log("-------------bst contains status-----------"+fValue+status);


// depth first traversal
console.log("-----------------depthFirstTraversalInorder-------------");
bstNode.depthFirstTraversalInorder(nodeValue);
console.log("-----------------depthFirstTraversalPreorder-------------");
bstNode.depthFirstTraversalPreorder(nodeValue);
console.log("-----------------depthFirstTraversalPostorder-------------");
bstNode.depthFirstTraversalPostorder(nodeValue);


let order = "pre-order";
order = "post-order";
order = "in-order"
console.log(`-------depthFirstTraversal ----${order}---------`);
bstNode.depthFirstTraversal(nodeValue,order);

// breadth first traversal
console.log(`-------Breadth First Traversal ----------`);
bstNode.breadthFirstTraversal(nodeValueForBreadthTraversal);

// maximum node value 
console.log("maximum  value of the node");
console.log(bstNode.getMaxValue());
// minimum value of the node

console.log("minimum value of the node");
console.log(bstNode.getMinValue());