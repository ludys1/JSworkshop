

let x = confirm("Are u a women?")
if (x == true) {
  let v = null;
  do {
  const y = prompt("What's your favourite color?");
  const parseX = parseInt(y);
   if (isNaN(parseX)) {
     v = parseX;
     alert("Your favourite color is " + y);
   }

 } while (v === null) ;

} else {
  let vv = null;
  do {

    const z = prompt("What is your favourite car?")
    const parseZ = parseInt(z);
      if (isNaN(parseZ)) {
        vv = parseZ;
        alert("Your favourite car is " + z);
      }
  } while (vv === null);




}
