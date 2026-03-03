// 6. Write a function that receives an array as arg and return their sum
    function arraySum(arr){
        let sum=0;
        for(let element of arr){
        sum+=element;
    }
    console.log(sum);
    }
    arraySum([12,3,11,55,2]);