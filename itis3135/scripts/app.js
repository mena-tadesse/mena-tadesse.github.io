/*Appointment*/
function popUp(){
    document.getElementById("popup").style.display = "block";
    document.getElementById("appointmentSection").style.display = "none";
}

function closePopUp(){
    document.getElementById("popup").style.display = "none";
    document.getElementById("appointmentSection").style.display = "block";
}

function clearForm() {
    document.getElementById('appointmentForm').reset();
}

/*Review*/
function addReview(){
    if(document.getElementById("userReview").value != "" && document.getElementById("name").value != ""){
    document.getElementById("reviewsWillGoHere").innerHTML += "<h2>";
    document.getElementById("reviewsWillGoHere").innerHTML += "<p>" + document.getElementById("userReview").value + " ~ " + document.getElementById("name").value + "</p>";
    document.getElementById("reviewsWillGoHere").innerHTML += "</h2>";
    }
}

function clearReview(){
    document.getElementById('name').value = '';
    document.getElementById('userReview').value = '';
}

/*Our Team*/
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}


/* 
let slideIndex = 1;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slides");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}
*/