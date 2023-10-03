function welcome(){
    alert("Tadesse Designs welcomes you " + document.getElementById("firstName").value + " " + document.getElementById("lastName").value + " ! We are glad you are doing " + document.getElementById("moody").value + "!");
}

function polygon(){
    if(document.getElementById("numbers") == 0){
        alert("A polygon can't have zero sides! Try again.");
    }
    if(document.getElementById("numbers").value == 1 || document.getElementById("numbers").value == -1){
        alert("A polygon with one side is a henagon.");
    }
    if(document.getElementById("numbers").value == 2 || document.getElementById("numbers").value == -2){
        alert("A polygon with two sides is a digon.");
    }
    if(document.getElementById("numbers").value == 3 || document.getElementById("numbers").value == -3){
        alert("A polygon with three sides is a trigon.");
    }
    if(document.getElementById("numbers").value == 4 || document.getElementById("numbers").value == -4){
        alert("A polygon with four sides is a tetragon.");
    }
    if(document.getElementById("numbers").value == 5 || document.getElementById("numbers").value == -5){
        alert("A polygon with five sides is a pentagon.");
    }
    if(document.getElementById("numbers").value == 6 || document.getElementById("numbers").value == -6){
        alert("A polygon with six sides is a hexagon.");
    }
    if(document.getElementById("numbers").value == 7 || document.getElementById("numbers").value == -7){
        alert("A polygon with seven sides is a heptagon.");
        }
    if(document.getElementById("numbers").value == 8 || document.getElementById("numbers").value == -8){
        alert("A polygon with eight sides is a octagon.");
    }
    if(document.getElementById("numbers").value == 9 || document.getElementById("numbers").value == -9){
        alert("A polygon with nine sides is a enneagon.");
    }
    if(document.getElementById("numbers").value == 10 || document.getElementById("numbers").value == -10){
        alert("A polygon with ten sides is a decagon.");
    }
    if(document.getElementById("numbers").value >= 10 || document.getElementById("numbers").value <= -10){
        alert("Please give a number between 1 and 10.");
    }
}

function turtles(){
    alert("A turtle once said: If you carry your home with you, you'll always find your way.");
}

function sum(){
    var num1 = promt("Enter a number");
    num1 = parseInt(num1);
    var num2 = promt("Enter another number");
    num2 = parseInt(num2);
    var num3 = num2 + num1;
    alert("The sum comes to " + num3);
}

function nice(){
    alert("You are super duper great!");
}

function dummy(){
    var q1 = promt("What is 2 + 3?");
    q1 = parseInt(q1);
    var q2 = promt("How many sides does a triagle have?");
    q2 = parseInt(q2);
    var q3 = promt("Are you smart? Enter 1 for yes and 2 for no.");
    q3 = parseInt(q3);
    alert("You are smart");
}







