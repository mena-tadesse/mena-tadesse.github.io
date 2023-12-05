let personArray = ["Bob Jones", "Amelix Fonsqua"];
let salaryArray = [85000, 70000];


function addSalary(){
    let person = document.getElementById("name").value;
    let salary = document.getElementById("salary").value;
    salary = parseFloat(salary);
    if(person == ""){
        alert("ERROR: Please enter a name");
    }
    else if(isNaN(salary)){
        alert("ERROR: Please enter a salary");
    }
    else if(person != "" && salary != ""){  
        personArray.push(person);
        salaryArray.push(salary);
    }
}
function displayResults(){
    let average = 0;
    let highest = 0;
    let total = 0;
    for(let i = 0; i < salaryArray.length; i++){
        if(salaryArray[i] > highest){
            highest = salaryArray[i];
        }
        total += salaryArray[i];   
    }
    average = total/salaryArray.length;
    document.getElementById("display").innerHTML = "<h2>Display</h2>";
    document.getElementById("display").innerHTML += "<p>Highest Salary:</p>";
    document.getElementById("display").innerHTML += "<p>" + highest + "</p>";
    document.getElementById("display").innerHTML += "<p>Average:</p>";
    document.getElementById("display").innerHTML += "<p>" + average.toFixed(2) + "</p>";
}

function displaySalary(){
    document.getElementById("table").innerHTML = "<tr><th>Person</th><th>Salary</th></tr>";
    for(let i = 0; i < personArray.length && i < salaryArray.length; i++){
        document.getElementById("table").innerHTML += "<tr><td>" + personArray[i] + "</td><td>" + salaryArray[i] + "</td></tr>";
    }
}

function employeeDropdown(){
document.getElementById("employeeDropdown").innerHTML = "";
for(let i = 0; i < personArray.length; i++){
    document.getElementById("employeeDropdown").innerHTML += "<option>" + personArray[i] + "</option>";
}
}

