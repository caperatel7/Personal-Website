function inputcontact() {
 var userinput;/* User puts input to get infomation on my contacts*/
 var output;
 userinput = document.getElementById("input1").value;
	
       if (userinput == "School Email" || userinput == "school email" )
	{output = "my email is kcollette@albany.edu" ;}
	else if (userinput == "Phone Number" || userinput == "phone number")
	{output = "2406204573" ;}
	else {output = "I cannot be contacted this way, try school email or Phone Number";}
 document.getElementById("answer").innerHTML = output;
 }
 

 function formcheckcontact(){
    var input1 = document.getElementById("input1").value;/*form checking for contact input*/
    
    if(input1 == null || input1 == ""){
         alert("Please fill out desired contact");
     }
 }
 

 function currency(){ // function


var hourweek = document.getElementById("wage").value;
var hourwage = document.getElementById("hours").value;
var hourweekpp = parseFloat(hourweek);
var hourwagepp = parseFloat(hourwage);

var total = hourweekpp*16+hourwagepp;
var dollar;
var answers = ["This salary is lower than the average NFL Player salary ", "This is the NFL average salary.", "This salary is higher than the average NFL PLayer salary."];
document.getElementById("amount").innerHTML= "Your salary is:" + total;
if(total<3900000) {
dollar = answers[0];
document.getElementById("money").innerHTML = dollar;
}
else if(total>3900000&&total<3900000) {
dollar = answers[1];
document.getElementById("money").innerHTML = dollar;
}
else {
dollar = answers[2];
document.getElementById("money").innerHTML = dollar;
}
}

function hi(){
        if(document.getElementById("wage").value==""){
        alert("Please enter a value of money.");
        return false;
        }
         }
         
         
function yes(){
        if(document.getElementById("hours").value==""){
        alert("Please enter a value of money.");
        return false;
        }
         }       
         
function gear() { /*list of all football gear */

var a = ["helmet","shoulderpads","girdle","cleats","practice pants","gloves","knee pads","mouthpiece"];
var b = document.getElementById("gear").value;
var c=b-1;

var i = "";
while (0 <= c) {
i = i + a[c] + "<br/>";
document.getElementById("gear2").innerHTML = i;
c--;
}
}         


 function time(){
  
  var h = new Date();
  var i = h.getHours();
  
  if(i<12) {
  alert("Morning Motivation, Football has no days OFF! "); //morning title 
  }
  
     else if (i>12&&i<17){
     alert ("The midnday grind continues!");  // midday title 
    }        
    
  else{
  alert("sleep,eat,and repeat, see you tomorrow"); // night title
  }
  }  
  

function calls() { // function name
time();
setCurrentMonth();
}


         