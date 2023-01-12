let vowels = [];
let consonants = [];
let arranged_letters;

function vowelsAndConsonants(s) {
  for (let i = 0; i < s.length; i++) {
    if (
      s[i] == "a" ||
      s[i] == "e" ||
      s[i] == "i" ||
      s[i] == "o" ||
      s[i] == "u"
    ) {
      vowels.push(s[i]);
    } else {
      consonants.push(s[i]);
    }
  }
  arranged_letters = vowels.concat(consonants);

  arranged_letters.forEach((el) => {
    console.log(`${el}\n`);
  });
}

//Test
vowelsAndConsonants("javascriptloops");

//DONE
