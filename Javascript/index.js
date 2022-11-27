//alert("me");
//document.write("hello");
//console.log("hello world");
//console.warn("this is warning");
//console.error("this is an error");
var n = 10;
var m = 89;
// console.log(n+m);
var str1 = 'this is a string';
var marks = {
    ritik: 95,
    prashant: 87,
    aum: 85
}
// console.log(marks);
// console.log(str1);
var a = true;
var b = false;
//console.log(a);
var und; //undefined
//console.log(und);
var n = null;
// console.log(n);

var arr1 = [1, 2, 3, "ritik", 5];
// console.log(arr);
//console.log(arr[1]);
//console.log(arr[3]);
var x = 45;
var y = 50;
// console.log(x >= y);
// console.log(x <= y);
// console.log(true && true);
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false && false);
// console.log(!true);
function avg(a, b) {
    return (a + b) / 2;
}
c1 = avg(5, 2);
// console.log(c1);
var age = 25;
// if(age>18){
//     console.log("u r not a kid");
// }
// else{
//     console.log("u r a kid");
// }
var arr = [1, 2, 3, 4, 5, 6, 7];
//console.log(arr);
// for(var i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }
// arr.forEach(function(element)
// {
//     console.log(element);
// })
let j = 0;
//const ac = 0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }
let myarr = ["fan","camera",34,null,true];
//console.log(myarr);
// myarr.pop();
// console.log(myarr);
// myarr.push("ritik");
// console.log(myarr);
//myarr.shift();
// console.log(myarr.unshift("ritik"));
// console.log(myarr);
let s = "i am learning js";
// console.log(s.length);
// console.log(s.indexOf("am"));
// console.log(s.slice(0,5));
// d = s.replace("js", "javascript");
// console.log(d, s);
let myDate = new Date();
// console.log(mydate.getTime());
// console.log(mydate.getFullYear());
// console.log(mydate.getDay());
// console.log(mydate.getMinutes());
// console.log(mydate.getHours());
// console.log(myDate);
//let elem = document.getElementById('click');
// document.getElementById('click').style.border = 'red';
// document.getElementById('click').style.border = '2px solid red';
// console.log(elem);
//let elemclass = document.getElementsByClassName('container');
//console.log(elemclass);
// elemclass[0].style.background = 'yellow';
function clicked(){
    console.log('the button was clicked');
}
window.onload = function(){
    console.log('the document was loaded');
}
firstcontainer.addEventListener('click', function(){
    document.querySelectorAll('.container')[1].innerHTML= "<b> we have clicked </b>"
    console.log('clicked on container');
})
// firstcontainer.addEventListener('mouseover', function(){
//     console.log('mouse on container');
// })

// firstcontainer.addEventListener('mouseout', function(){
//     console.log('mouse out of the container');
// })
// firstcontainer.addEventListener('mouseup', function(){
//     console.log('mouse up when clicked on container');
// })
// firstcontainer.addEventListener('mousedown', function(){
//     console.log('mouse down when clicked on container');
// })
