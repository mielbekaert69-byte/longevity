function calculateAge() {
// FAQ

document.querySelectorAll(".faq-question")
.forEach(button => {

button.addEventListener("click", () => {

const answer =
button.nextElementSibling;

if(answer.style.display === "block"){
answer.style.display = "none";
}
else{
answer.style.display = "block";
}

});

});


// TESTIMONIAL SLIDER

let current = 0;

const testimonials =
document.querySelectorAll(".testimonial");

setInterval(() => {

testimonials[current]
.classList.remove("active");

current++;

if(current >= testimonials.length){
current = 0;
}

testimonials[current]
.classList.add("active");

},4000);
const age =
Number(document.getElementById("age").value);

const sleep =
Number(document.getElementById("sleep").value);

const exercise =
Number(document.getElementById("exercise").value);

let biologicalAge = age;

if(sleep >= 7){
biologicalAge -= 2;
}

if(exercise >= 3){
biologicalAge -= 3;
}

document.getElementById("result").innerHTML =
`Geschatte biologische leeftijd: ${biologicalAge} jaar`;
}
const counters =
document.querySelectorAll(".counter");

counters.forEach(counter => {

const updateCounter = () => {

const target =
+counter.getAttribute("data-target");

const count =
+counter.innerText;

const increment =
target / 100;

if(count < target){

counter.innerText =
Math.ceil(count + increment);

setTimeout(updateCounter,20);

}
else{

counter.innerText = target;

}

};

updateCounter();

});
