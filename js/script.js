function calculateAge() {

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
