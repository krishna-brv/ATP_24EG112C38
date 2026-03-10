// Bank Transaction Analyzer
// You are building a bank statement summary.

// Test data:
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];


// Tasks:
//     1. filter() all credit transactions
    const credit=transactions.filter((transactionObj)=>transactionObj.type==="credit");
    console.log(credit);
    
//     2. map() to extract only transaction amounts
    const amounts=transactions.map(transactionObj=>transactionObj.amount);
    console.log(amounts);
    
//     3. reduce() to calculate final account balance
    
    const balance=transactions.reduce((acc,transactionObj)=>{
        if(transactionObj.type==="credit")
           return acc+transactionObj.amount;
        else 
            return acc-transactionObj.amount;
    },0);
    console.log(balance);
    
//     4. find() the first debit transaction
    const debit=transactions.find(transactionObj=>transactionObj.type==="debit");
    console.log(debit);
    
//     5. findIndex() of transaction with amount 10000
    const index_10000=transactions.findIndex(transactionObj=>transactionObj.amount===10000);
    console.log(index_10000);