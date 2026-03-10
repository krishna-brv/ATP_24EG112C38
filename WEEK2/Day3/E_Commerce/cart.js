import { getProductById, checkStock } from './product.js';
                          
let cartItems = [];

// TODO: Implement these functions

export function addToCart(productId, quantity) {
    const product = getProductById(productId);
    
    // Check 1: Does the product exist in the store?
    if (!product) {
        return "Product not found";
    }

    // Check 2: Look for item in cart (Safe check for undefined)
    let Item_in_cart = cartItems.find(item => item && item.id === productId);

    if (Item_in_cart) {
        Item_in_cart.quantity += quantity;
    } else {
        cartItems.push({ ...product, quantity });
    }
    
    return "Item added to cart";
}
                          
export function removeFromCart(productId) {
// Remove product from cart
let indexOfItem=cartItems.findIndex(productObj=>productObj.id===productId);
    if(indexOfItem!=-1)cartItems.splice(indexOfItem,1);
}
                          
export function updateQuantity(productId, newQuantity) {
// Update quantity of product in cart
// Check stock before updating
    let available=checkStock(productId,newQuantity);
    let Item_in_cart=cartItems.find(productObj=>productObj.id===productId);
    if(Item_in_cart && available){
        Item_in_cart.quantity=newQuantity;
    }
}
                           
export function getCartItems() {
// Return all cart items with product details
    return cartItems;
}
                          
export function getCartTotal() {
// Calculate total price of all items in cart
// Return total
    return cartItems.reduce((acc,productObj)=>acc+(productObj.price*productObj.quantity),0);

}
                          
export function clearCart() {
// Empty the cart
cartItems=[];
}