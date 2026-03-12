// 7. Write a function that receives an array & search element as args and 
// returns the index of that search element in the array. It should return "not found" when search element not found.
    function search(arr,key){
        let index=-1;
        for(let i=0;i<arr.length;i++){
            if(key===arr[i]){
                index=i;
                break;
            }
        }
        if(index===-1)return "not found";
        return index;
    }

    console.log(search([1,2,3,55432,111],4));
    
