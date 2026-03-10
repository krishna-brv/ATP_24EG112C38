//iii. discount.js - Coupon and discount logic
// Available coupons
const coupons = {
'WELCOME10': { type: 'percentage', value: 10, minAmount: 1000 },
'FLAT500': { type: 'flat', value: 500, minAmount: 5000 },
'ELECTRONICS20': { type: 'percentage', value: 20, minAmount: 10000, category: 'electronics' }
};
// TODO: Implement these functions
export function validateCoupon(couponCode, cartTotal, cartItems) {
// 1. Check if coupon exists
// 2. Check minimum amount requirement
// 3. Check category requirement (if any)
    const coupon=coupons[couponCode];
    if(!coupon){
        return {valid:false,message:"Invalid coupon code"};
    }
    if (cartTotal < coupon.minAmount) {
        return { valid: false, message: `Minimum spend of ${coupon.minAmount} required.` };
    }

    if (coupon.category) {
        const hasCategory = cartItems.some(item => item.category === coupon.category);
        if (!hasCategory) {
            return { valid: false, message: `This coupon is only for ${coupon.category} items.` };
        }
    }

    return { valid: true, message: 'Coupon applied successfully!' };

// Return { valid: true/false, message: '...' }
}

export function calculateDiscount(couponCode, cartTotal) {
// Calculate discount amount based on coupon type
// Return discount amount
    const coupon=coupons[couponCode];
    if(!coupon)return 0;
    if(coupon.type==='percentage'){
        return (coupon.value*cartTotal)/100;
    }
    else if(coupon.type==='flat'){
        return coupon.value;
    }
}

export function applyDiscount(cartTotal, couponCode, cartItems) {
// 1. Validate coupon
    const validate=validateCoupon(couponCode,cartTotal,cartItems);
    let discountAmt=0;
    if(validate.valid){
        discountAmt=calculateDiscount(couponCode,cartTotal);
    }
    return {
        originalTotal: cartTotal,
        discount: discountAmt,
        finalTotal: cartTotal - discountAmt,
        message: validate.message
    };
}