// 5. Write a function that receives 3 number args and  return the big number 
    function greatestOfThreeNumbers(num1,num2,num3){
        let bigNum=0;
        if(num1>num2){
            if(num1>num3){
                bigNum=num1;
            }
        }
        else{
            if(num2>num3){
                bigNum=num2;
            }
            else{
                bigNum=num3;
            }
        }
        return bigNum;
    }
    console.log(greatestOfThreeNumbers(10,22,34));
    