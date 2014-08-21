    var weight = 0;
    var reps = 0;
    var max = 0;

    $("#maxCalc").click(function(){
        weight = $("#maxWeight").val();
        reps = $("#reps").val();
        if(reps > 20){
            window.plugins.toast.showLongCenter("This ain't Crossfit son calm down");
        }
        else{
        $("#maxResults").empty();

        max = (Number(weight) * Number(reps) * 0.033) + Number(weight);
        console.log(max);
        $("#maxResults").append('<h4> Your max is: '+ Math.round(max) +'</h4>');

        }
        });