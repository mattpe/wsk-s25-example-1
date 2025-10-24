// Task 1 -  Celsiukset Fahrenheiteiksi
// F = (C * 9/5) + 32

const degreesC = prompt('Anna lämpötila (C):');
const degreesF = (degreesC * 9) / 5 + 32;

// haetaan viittaus html-elementtiin (<main>) johon tulostetaan
const outputElement = document.querySelector('main');

// kirjoitetaan tulos html-elementtiin
outputElement.innerText = `${degreesC} celciusastetta on ${degreesF} fahrenheittia.`;
