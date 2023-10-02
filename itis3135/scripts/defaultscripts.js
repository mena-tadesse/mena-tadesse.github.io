function welcome(){
    alert("Tadesse Designs welcomes you " + document.getElementById("firstName").value + " " + document.getElementById("lastName").value + " ! We are glad you are doing " + document.getElementById("moody").value + "!");
}


function polygon(){
    var number = document.getElementById("numbers").value;
    if(number == 0){
        alert("A polygon can't have zero sides!");
    }
    else if(number == 1 || number == -1){
        alert("A polygon with one side is a henagon.");
    }
}





