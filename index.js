var char = "";
var num = '0123456789';
var sym = '!@#$%^&*=-_';
var upper= "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lower = "abcdefghijklmnopqrstuvwxyz"

var counter =document.getElementById("counter");
var upperBox = document.getElementById("upper");
var lowerBox = document.getElementById("lower");
var numBox = document.getElementById("num");
var symBox = document.getElementById("sym");
var submit = document.getElementById("submit");
var generator = document.getElementById("generator");

submit.addEventListener("click",function(e){
     var characters = char;
  (upperBox.checked) ? characters += upper : "";
  (lowerBox.checked) ? characters += lower : "";

    (numBox.checked) ? characters += num : "";
    (symBox.checked) ? characters += sym : "";
  
   
    generator.value = password(counter.value, characters);
});

function password(l,characters){
  		var pwd = '';

  
    for(var i = 0; i<l; i++){
    		pwd += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return pwd;
}