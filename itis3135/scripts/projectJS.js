/*Appointment Functionality*/
//a pop up will appear after the submit button is clicked
function popUp(){
    document.getElementById("popup").style.display = "block";
    document.getElementById("appointmentSection").style.display = "none";
}

//close pop up and return to appointment form
function closePopUp(){
    document.getElementById("popup").style.display = "none";
    document.getElementById("appointmentSection").style.display = "block";
}

//when the pop up is closed, the user's info will be cleared
function clearForm() {
    document.getElementById('appointmentForm').reset();
}

/*Review Functionality*/
//When the user submits their review, it will be added to the reviews list
function addReview(){
    if(document.getElementById("userReview").value != "" && document.getElementById("name").value != ""){
    document.getElementById("reviewsWillGoHere").innerHTML += "<h2>";
    document.getElementById("reviewsWillGoHere").innerHTML += "<p>" + document.getElementById("userReview").value + " ~ " + document.getElementById("name").value + "</p>";
    document.getElementById("reviewsWillGoHere").innerHTML += "</h2>";
    }
}

//after they submit their review, the info they inputted will be cleared
function clearReview(){
    document.getElementById('name').value = '';
    document.getElementById('userReview').value = '';
}

/*Staff Slideshow Functionality*/
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

//the slideshow order
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