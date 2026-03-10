// 2.OTP Countdown Simulator (Console App)
// ------------------------------------
//Simulate OTP sending flow in Node.js:
//Show “OTP Sent Successfully”     
//Start 10-second countdown
//Allow resend only after countdown ends

console.log("OTP Sent Successfully");
let seconds=10;
let intervalId=setInterval(()=>{
    
    console.log(`Otp can be sent again after ${seconds} seconds`);
    seconds--;
    if(seconds===0){
        console.log("otp resent");
        clearInterval(intervalId);
    }

},1000);