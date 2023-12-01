let arr=Array(1,2,3,4,5,6,7,8,9,10);
console.log(arr.__proto__===Array.prototype);
let timelD = null;
document.queryselector('.ipt').onkeyup = function () {
    if (timelD != null) {
        clearTimeout(timelD);
    }
    timelD = setTimeout(() => {
        console.log("防抖");
    }, 1000);
}
