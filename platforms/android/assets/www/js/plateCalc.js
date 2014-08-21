//declare global variables
var weight = 0;
var ff = 0; //fortyfive
var tf = 0; //thirtyfive
var twf = 0; //twentyfive
var ten = 0; //ten
var five = 0; //five
var two = 0; //two point five

$("#plateCalc").click(function(){ //onclick execute
        
    
 
        $("#plateResults").empty(); //clear results div so that data doesnt pile up in div
        weight = ($("#plateWeight").val() - 45) / 2; //calculate the weight on each side of the barbell
        
        if(weight < 0){ //if the weight on each side of the barbell is negative(total weight less than 45, toast)
         window.plugins.toast.showLongCenter("Try a dowel, do you even lift");

        }else{//if weight on each side is more than 0, calculate results
        console.log("weight each side: " + weight);
        
        ff = Math.floor(weight / 45); //divides the weight by 45 to see how many 45lb plates are needed on each side
        console.log("Number of 45's " + ff);
        var left = weight % 45; //var left keeps track of the weight still left to be assigned to plates. 
        weight = left; //assigns the left over value to the global var weight
        console.log(left);
    //this same procedure happens for each of the remaining plate types with the weight var being lessened each time
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