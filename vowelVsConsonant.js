// Vowels Vs Consonant
// create variable to connect to string
const hello = `hello`;
// create vowel counter variable
let helloVowel = 0;
// create consonant counter variable
let helloCon = 0;
// create loop that loop through a string of lowercase letters
for (i = 0; i < hello.length; i++) {
  // count the vowels
  if (
    hello[i] === `a` ||
    hello[i] === `e` ||
    hello[i] === `i` ||
    hello[i] === `o` ||
    hello[i] === `u`
  ) {
    helloVowel++;
  } else {
    // count the consonants
    helloCon++;
  }
}
// print word
// follow with how many consonants
// follow with how many vowels
console.log(`${hello} has ${helloCon} consonants and ${helloVowel} vowels`);

const ukelele = `ukelele`;
let ukeleleVowel = 0;
let ukeleleCon = 0;
for (i = 0; i < ukelele.length; i++) {
  if (
    ukelele[i] === `a` ||
    ukelele[i] === `e` ||
    ukelele[i] === `i` ||
    ukelele[i] === `o` ||
    ukelele[i] === `u`
  ) {
    ukeleleVowel++;
  } else {
    ukeleleCon++;
  }
}
console.log(
  `${ukelele} has ${ukeleleCon} consonants and ${ukeleleVowel} vowels`
);

const awesome = `awesome`;
let awesomeVowel = 0;
let awesomeCon = 0;
for (i = 0; i < awesome.length; i++) {
  if (
    awesome[i] === `a` ||
    awesome[i] === `e` ||
    awesome[i] === `i` ||
    awesome[i] === `o` ||
    awesome[i] === `u`
  ) {
    awesomeVowel++;
  } else {
    awesomeCon++;
  }
}
console.log(
  `${awesome} has ${awesomeCon} consonants and ${awesomeVowel} vowels`
);

const onomonopia = `onomonopia`;
let onomonopiaVowel = 0;
let onomonopiaCon = 0;
for (i = 0; i < onomonopia.length; i++) {
  if (
    onomonopia[i] === `a` ||
    onomonopia[i] === `e` ||
    onomonopia[i] === `i` ||
    onomonopia[i] === `o` ||
    onomonopia[i] === `u`
  ) {
    onomonopiaVowel++;
  } else {
    onomonopiaCon++;
  }
}
console.log(
  `${onomonopia} has ${onomonopiaCon} consonants and ${onomonopiaVowel} vowels`
);

const textbook = `textbook`;
let textbookVowel = 0;
let textbookCon = 0;
for (i = 0; i < textbook.length; i++) {
  if (
    textbook[i] === `a` ||
    textbook[i] === `e` ||
    textbook[i] === `i` ||
    textbook[i] === `o` ||
    textbook[i] === `u`
  ) {
    textbookVowel++;
  } else {
    textbookCon++;
  }
}
console.log(
  `${textbook} has ${textbookCon} consonants and ${textbookVowel} vowels`
);
