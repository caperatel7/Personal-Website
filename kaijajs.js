function currency(){


var hourweek = document.getElementById("wage").value;
var hourwage = document.getElementById("hours").value;
var hourweekpp = parseFloat(hourweek);
var hourwagepp = parseFloat(hourwage);

var total = hourweekpp*hourwagepp*52;
var dollar;
var answers = ["This salary is too low.", "This salary is almost enough.", "This salary is good."];
document.getElementById("amount").innerHTML= "Your salary is:" + total;
if(total<20000) {
dollar = answers[0];
document.getElementById("money").innerHTML = dollar;
}
else if(total>20000&&total<25000) {
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
        alert("Please enter the correct salary info.");
        return false;
        }
         }
         
         
function yes(){
        if(document.getElementById("hours").value==""){
        alert("Please enter the correct hours info.");
        return false;
        }
         }       
         
  
  function time(){
  
  var h = new Date();
  var i = h.getHours();
  
  if(i<12) {
  alert("Good Morning!");
  }
  
     else if (i>12&&i<17){
     alert ("Good Afternoon!"); 
    }        
    
  else{
  alert("Good Night!");
  }
  }  
  
  // Upper Left Corner Live Clock Script- (c) Dynamic Drive (www.dynamicdrive.com) For full source code, 100's more DHTML scripts, and TOS,visit http://www.dynamicdrive.com


function show5(){
 if (!document.layers&&!document.all&&!document.getElementById)
 return;
 var Digital=new Date();
 var hours=Digital.getHours();
 var minutes=Digital.getMinutes();
 var seconds=Digital.getSeconds();
 var dn="AM"; 
 if (hours>12){
 dn="PM";
 hours=hours-12
 }
 if (hours==0)
 hours=12
 if (minutes<=9)
 minutes="0"+minutes;
 if (seconds<=9)
 seconds="0"+seconds;
//change font size here to your desire
myclock="<font size='5' face='Arial' ><b><font size='1'>Current Time:</font></br>"+hours+":"+minutes+":"
 +seconds+" "+dn+"</b></font>"
if (document.layers){
document.layers.liveclock.document.write(myclock);
document.layers.liveclock.document.close();
}
else if (document.all)
liveclock.innerHTML=myclock;
else if (document.getElementById)
document.getElementById("liveclock").innerHTML=myclock;
setTimeout("show5()",1000);
 }

function calls {
show5();
time();
}
