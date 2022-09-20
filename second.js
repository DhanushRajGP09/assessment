// conversion of deep array into plain array without using array.flat();
let arr = [1,2,[3,4,[5]]];

function flatten(arr){
    var ret = [];
    for(var i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            ret = ret.concat(flatten(arr[i]));
        }
        else{
            ret.push(arr[i]);
        }
    }
    return ret;
}
console.log(flatten(arr));