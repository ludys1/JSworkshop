(async function () {
  // poniżej tej linii zacznij swój kod

  // console.log('Hello');
  // await sleep(1000);
  // console.log('Hello after second');
  // await sleep(2000);
  // console.log('Hello after 3 seconds. I have slept for 2 seconds');

  const wynik1 = document.querySelectorAll('tr')[2].children[3];
  const wynik2 = document.querySelectorAll('tr')[3].children[2];

  await condition('Wynik 1 zawiera 2*3', () => {
    return parseInt(wynik1.innerText) === 2*3;

  });

  await condition('Wynik 2 zawiera 2*3', () => {
    return parseInt(wynik2.innerText) === 2*3;
  })

  console.log('test zakończony sukcesem');


  await condition('PIerwszy checkbox jest klinikety', () => {
    return document.querySelector('[type=checkbox]').checked;
  }, 5000)

  const checkboxes = document.querySelectorAll(`input[type=checkbox]`);
  // el.focus();
 
  const brokenButton = document.querySelectorAll(`button`)[1];
  for (let i = 0 ; i < 22 ; i++){
    brokenButton.click();
    await sleep();
  }
 
 
 
 
  let i=0;
 while(true) {
   await sleep(1000);
   checkboxes[i].click();
   i = (i+1) % checkboxes.length;
 }

  console.log("asd");

  a powyżej tej linii skończ
})()
