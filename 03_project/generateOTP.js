<<<<<<< HEAD
function generateOTP(length) {
    let otp = "";
    for (let i = 0; i < length; i++) {
        otp += Math.floor(Math.random() * 10).toString();
    } return otp;
}
=======
function generateOTP(length){
    let otp="";
    for(let i=0;i<length;i++){
        otp += Math.floor(Math.random() * 10).toString();
    }return otp;
}
>>>>>>> 79c289b53fc6d844e6753634637e6c06ec3d3d0a
console.log(generateOTP(6))