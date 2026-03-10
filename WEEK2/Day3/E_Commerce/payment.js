import { reduceStock } from './product.js';
import { getCartItems, getCartTotal, clearCart } from './cart.js';
import { applyDiscount } from './discount.js';

export function validatePaymentMethod(method) {
  const validMethods = ['card', 'upi', 'cod'];
  return validMethods.includes(method.toLowerCase());
}

function generateOrderId() {
  return 'ORD' + Date.now();
}

export function processPayment(paymentMethod, couponCode = null) {
  // 1. Get cart items and total
  const items = getCartItems();
  const subtotal = getCartTotal();

  if (items.length === 0) {
    return { status: 'failed', message: 'Cart is empty' };
  }

  // 2. Apply discount if coupon provided
  let discount = 0;
  let finalTotal = subtotal;
  let promoMessage = '';

  if (couponCode) {
    const discountResult = applyDiscount(subtotal, couponCode, items);
    discount = discountResult.discount;
    finalTotal = discountResult.finalTotal;
    promoMessage = discountResult.message;
  }

  // 3. Validate payment method
  if (!validatePaymentMethod(paymentMethod)) {
    return { status: 'failed', message: 'Invalid payment method' };
  }

  // 4. Process payment (Simulated)
  // 5. Reduce stock for all items
  items.forEach(item => {
    reduceStock(item.id, item.quantity);
  });

  // 6. Clear cart
  clearCart();

  // 7. Generate order summary
  return {
    orderId: generateOrderId(),
    items: items,
    subtotal: subtotal,
    discount: discount,
    total: finalTotal,
    paymentMethod: paymentMethod,
    status: 'success',
    message: promoMessage || 'Payment processed successfully'
  };
}