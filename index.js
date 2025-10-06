if(! Array.prototype.myMap){
    Array.prototype.myMap = function(userfn){
        let result = [];
        for(let i = 0; i < this.length; i++){
        let value = userfn(this[i])
        result.push(value)


    }
    return result;
}
}










let arr = [1,2,3,4,5];

let num = arr.myMap((e)=> e*2)

console.log(num);

