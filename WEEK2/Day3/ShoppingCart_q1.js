
// You are building a shopping cart summary for an e-commerce website.

// Test Data : 

 const cart = [
   { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
   { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
   { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
   { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
 ];

// Tasks:
//     1. Use filter() to get only inStock products
     const inStock=cart.filter((product)=>product.inStock===true);
     console.log(inStock);
//     2. Use map() to create a new array with:  { name, totalPrice }
    const newArray=cart.map((product)=>{
    return {name:product.name,totalPrice:product.price*product.quantity}});
    console.log(newArray);
//     3. Use reduce() to calculate grand total cart value
     const total=cart.reduce((acc,product)=>acc+(product.price*product.quantity),0);
     console.log(total);
//     4. Use find() to get details of "Mouse"
     const mouse=cart.find((product)=>product.name==="Mouse");
     console.log(mouse);
//     5. Use findIndex() to find the position of "Keyboard"
     const keyboard=cart.findIndex((product)=>product.name=="Keyboard");
     console.log(keyboard);

     