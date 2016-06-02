var zahl1 = 5;
var zahl2 = 4;

var ergebnis = zahl1 * zahl2;
alert(ergebnis);

var tag = 3;

if (tag === 1) {
  alert("Es ist Montag.");
} else if (tag === 2) {
  alert("Es ist Dienstag.");
} else if (tag === 3) {
  alert("Es ist Mittwoch.");
} else if (tag === 4) {
  alert("Es ist Donnerstag.");
} else if (tag === 5) {
  alert("Es ist Freitag.");
} else if (tag === 6) {
  alert("Es ist Samstag.");
} else if (tag === 7) {
  alert("Es ist Sonntag.");
} else {
  alert("Den Wochentag" + tag + "gibt es nicht!");
}

"Ich bin ein String"
1234567890987654321

var zahl = Number("16273");
-> 16273

var zahl = Number("abcdef");
-> ???

if (bedingung1) {
  //dann mach was
} else if (bedingung2) {
  //dann mach was anderes
} else {
  //ansonsten mach das
}

if ((4+2) === 6) {
  //dann mach was
}

if (variable === "ABCDEFG") {
  //dann mach was
}

alert("Hallo Welt!");

var variablenName = "irgendein Text"
var andererName = 1234567890

alert(variablenName);
alert(andererName);

document.getElementById("irgendeineID");

document.getElementsByClassName("irgendeineKlasse");

document.getElementsByTagName("irgendeinTag");

var element = document.getElementById("irgendeineID");

document.getElementById("irgendeineID").innerText = "blablabla";

document.getElementById("irgendeineID").value = "blablabla";

document.getElementById("irgendeineID").innerText;

document.getElementById("irgendeineID").value;


element.addEventListener("click", function() {
  //Wird ausgeführt, wenn auf das
  //Element geklickt wird.
});

var bsp1 = 2 + "4";
