// 4. Find the smallest element in marks array
    let smallest=marks[0];
    for(let score of marks){
        if(score<smallest)
            smallest=score;
    }
    console.log("The least score is ",smallest);
