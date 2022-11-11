// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function characters (newInput, letters, standard){
    let coded = newInput.map((character) => {
      const index = letters.indexOf(character);
      if(index === -1) return character;
      return standard[index]
    });
    return coded.join("");
  }

  function substitution(input, alphabet, encode = true) {
   if (!alphabet || alphabet.length != 26) return false;
   
   let newInput = input.toLowerCase().split("");
   let letters = alphabet.toLowerCase().split("");
   let standard = "abcdefghijklmnopqrstuvwxyz".split("");

   for (let i = 0; i < letters.length; i++){
    for( let j = i + 1; j < letters.length; j++){
      if (letters[i] === letters[j]) return false;
    }
   }
   if (encode) return characters(newInput, standard, letters);
   return characters(newInput, letters, standard);
   }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
