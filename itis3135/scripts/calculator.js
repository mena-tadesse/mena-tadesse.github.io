let zero = 0;
let one = 1;
let two = 2; 
let three = 3;
let four = 4;
let five = 5;
let six = 6;
let seven = 7;
let eight = 8;
let nine = 9;
let add = '+';
let subtract = '-';
let multiply = '*';
let divide = '/';
let decimal = '.';

function show(insert) {
    if(insert == zero){
    document.getElementById("output").value += zero;  
    }
    else if(insert == one){
        document.getElementById("output").value += one;
    }
    else if(insert == two){
        document.getElementById("output").value += two;
    }
    else if(insert == three){
        document.getElementById("output").value += three;
    }
    else if(insert == four){
        document.getElementById("output").value += four;
    }
    else if(insert == five){
        document.getElementById("output").value += five;
    }
    else if(insert == six){
        document.getElementById("output").value += six;
    }
    else if(insert == seven){
        document.getElementById("output").value += seven;
    }
    else if(insert == eight){
        document.getElementById("output").value += eight;
    }
    else if(insert == nine){
        document.getElementById("output").value += nine;
    }
    else if(insert == add){
        document.getElementById("output").value += insert;
    }
    else if(insert == subtract){
        document.getElementById("output").value += insert;
    }
    else if(insert == multiply){
        document.getElementById("output").value += insert;
    }
    else if(insert == divide){
        document.getElementById("output").value += insert;
    }
    else if(insert == decimal){
        document.getElementById("output").value += insert;
    }
}

function getAnswer() {
    document.getElementById("output").value = eval(output.value);
}

function cleared() {
    document.getElementById("output").value = "";
}
