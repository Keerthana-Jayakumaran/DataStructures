// simple bloom filter implementation
'use strict';
var murmur3 = require('murmurhash3');
var BitArray = require('node-bitarray');


// controller function
function controller()
{
// getting false positive probability and no of elements to add in the filter
var falseProb = 0.07;
var totalElements = 2;
// var elementsToAdd = ['hanu','keer','hanuman'];
var elementsToAdd = ['hanu','keer','hanuman','HANUMAN','kira'];
var filterSize = calculateFilterSize(falseProb,totalElements);
var hashFunsCount = calculateHashFunsCount(totalElements,filterSize);
var element = 'constellation';
// initialize the bit array with zero
var bitArr = new BitArray(0,filterSize);
// store the elements in the filter
addElements(bitArr,elementsToAdd,hashFunsCount);
var checkVal = checkElement(bitArr,element,hashFunsCount,filterSize);
console.log("check val"+checkVal);
if(checkVal)
{
    console.log("element may or may not be present")
}
else
{
    console.log("not present");
}

}

// function returns size of the filter (bit array size)
function calculateFilterSize(falseProb,totalElements)
{
    // formula to calculate size of the filter  m = -(n * lg(p)) / (lg(2)^2) 
    // n - items to be added in the filter
    // p - probability of false positive
    var size = Math.ceil(-((totalElements*Math.log(falseProb))/Math.pow((Math.log(2)),2)));
    console.log("size value"+size);
    return Math.ceil(size); 
}
function calculateHashFunsCount(totalElements,filterSize)
{
    // formula to calculate hash funtions count k = (m/n) * lg(2)
    // n - items to be added in the filter
    // m - filter size (bit array length)
    var hashCount =Math.ceil((filterSize / totalElements )*(Math.log(2)));
    console.log("hashCount" + hashCount);
    // return hashCount;
    return 2;
}
// add the elements in the filter
function addElements(bitArr,elementsToAdd,hashFunsCount)
{
    // elementsToAdd - array of values to be added in the filter
    var filterSize = elementsToAdd.length;
    for(let i=0;i<elementsToAdd.length;i++)
    {
        console.log("elementsToAdd"+elementsToAdd[i]);
        // hash calculation for  key and seed
        for(let j=0; j<hashFunsCount; j++)
        {
            var hashvalue =  murmur3.murmur32Sync(elementsToAdd[i],j)
                               
                var index = hashvalue % filterSize;
                console.log(" elementsToAdd[i] seed , hashvalue , index"+elementsToAdd[i]+" "+j+" "+hashvalue+" "+index);
                if(bitArr.get(index) == 0)
                {
                    bitArr.set(index,1);
                }
                console.log("element inserted bit arr");
                bitArr.forEach(element => {
                    console.log(element);
                    
                });
                


                

        }
       
       
    }

}
// checking whether element is present or not
// element - element to check
// hashFunsCount - hash funs count
function checkElement(bitArr,element,hashFunsCount,filterSize)
{
    for(let j=0; j<hashFunsCount.length; j++)
    {
        var hashvalue = murmur3.murmur32Sync(element,j)
            if(err)
            throw err;
            var index = hashvalue % filterSize;
            console.log("element and index"+element+index);
            if(bitArr.get(index) == 0)
            {
                bitArr.forEach(ele => {
                    console.log(element + ele);
                    
                });
                return false;
            }
        
    }
    return true;
}

controller();

