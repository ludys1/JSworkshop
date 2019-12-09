let age = null;
do {
  const dirtyAge = prompt('Ile masz lat?');
  const parsedAge = parseInt(dirtyAge);
  if (!isNaN(parsedAge)) {
    age = parsedAge;
    alert("Mam " + age + " lat")
  }
} while (age === null);
