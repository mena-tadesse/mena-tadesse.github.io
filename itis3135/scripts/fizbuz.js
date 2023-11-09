function fizzbuzzbang(){
let output = "";
let word1 = "fizz";
let word2 = "buzz";
let word3 = "BANG!";
const main = document.createElement('main');
const ul = document.createElement('ul')
for(let i = 1; i <= 100; i++){
    let thisLine = "";
    if(i % 3 === 0){
        thisLine += word1;
    }
    else if(i % 5 === 0){
        thisLine += word2;
    }
    else if (i % 7 === 0){
        thisLine += word3;
    }
    else if (thisLine === "") {
        thisLine += i;
    }
   // output += thisLine + "</li>";
   let li = document.createElement('li');
   li.innerText = thisLine;
   ul.appendChild(li);
}
main.appendChild(ul);
document.querySelector("body").appendChild(main);
}

fizzbuzzbang();