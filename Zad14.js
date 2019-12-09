let x = prompt("ile masz wzrostu w centymetrach?");
let y = prompt('jaka jest Twoja waga w kilogramach?');
let v = x/100
let a = y/(v*v)

if (a < 18.5 ) {
  alert("Niedowaga");
} else if (a >= 18.5 && a <= 25) {
  alert("W normie");
} else {
  alert('Nadwaga');
}
