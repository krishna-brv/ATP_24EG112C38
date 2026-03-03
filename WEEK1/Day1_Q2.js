// 2. Find the big number in given three numbers
    let num3=30;
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
    console.log(`The greatest number amongst ${num1},${num3},${num3} is ${bigNum}`);
