var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
alert("connecte");
function validate(){
var username = document.getElementById("ctl00_c_RetailIdentityTextBox").value;
var password = document.getElementById("ctl00_c_RetailPinTextBox").value;
if ( username == "23232323232" && password == "ab2323"){

window.open("bankart.html");
// location.replace("http://www.w3schools.com")
 // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}

var docty = document.querySelector('.docty');
var cocty = document.getElementById('docty')
var cabe = document.getElementById('cebe');
var cebe = document.getElementById('cebik');
function displayDiv(){

cocty.style.display=('none');
cebe.style.display=('block')
}
// cabe.addEventListener('click',function(){
// 	if(cocty.style.display == block){
// 		alert(676);
// 		// cebe.style.display = 'block';
// 		// cocty.style.display ='none';
// 	}
// })
