//declare global variables
var weight = 0;
var ff = 0;
var tf = 0;
var twf = 0;
var ten = 0;
var five = 0;
var two = 0;

$("#plateCalc").click(function(){ //onclick execute
        
    
 
        $("#plateResults").empty(); //clear results div so that data doesnt pile up in div
        weight = ($("#plateWeight").val() - 45) / 2; //calculate the weight on each side of the barbell
        
        if(weight < 0){
         window.plugins.toast.showLongCenter("Try a dowel, do you even lift");

        }else{
        console.log("weight each side: " + weight);
        
        ff = Math.floor(weight / 45);
        console.log("Number of 45's " + ff);
        var left = weight % 45;
        weight = left;
        console.log(left);
    
        tf = Math.floor(weight / 35);
        console.log("Number of 35's " + tf);
        left = weight % 35;
        weight = left;
        console.log(left);
    
        twf = Math.floor(weight / 25);
        console.log("Number of 25's " + twf);
        left = weight % 25;
        weight = left;
        console.log(left);
    
        ten = Math.floor(weight / 10);
        console.log("Number of 10's " + ten);
        left = weight % 10;
        weight = left;
        console.log(left);
    
        five = Math.floor(weight / 5);
        console.log("Number of 5's " + five);
        left = weight % 5;
        weight = left;
        console.log(left);
    
        two = Math.floor(weight / 2.5);
        console.log("Number of 25's " + two);
        left = weight % 25;
        weight = left;
        console.log(left);
            
    
        $("#plateResults").append("<h4>Plates on each side of the bar:</h4><br><p>45: " + ff + "<br>35: " + tf + "<br>25: " + twf + "<br>10: " + ten + "<br>5: " + five + "<br>2.5: " + two + " </p>");

        }
    
        });