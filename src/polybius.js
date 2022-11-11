// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

// When encoding, it translates the letters i and j to 42.
// When decoding, it translates 42 to (i/j).
// It ignores capital letters. (For example, the results of A Message and a message should be the same.)
// It maintains spaces in the message, before and after encoding or decoding

const polybiusModule = (function () {


  function polybius(input, encode = true) {
  
    let polySquare = [
      ["a", "b", "c", "d", "e"],
      ["f", "g", "h", "(i/j)", "k"],
      ["l", "m", "n", "o", "p"],
      ["q", "r", "s", "t", "u"],
      ["v", "w", "x", "y", "z"],
    ]
  
  const newInput = input.toLowerCase().split("")

    if (encode){
        
      const code = newInput.map((letter) => {
        
        const ascii = letter.charCodeAt(0);
        if((ascii < 97 || ascii > 122) && (ascii != 32)) {
           return}
        for (let i = 0; i < polySquare.length; i++){
          for (let j =0; j < polySquare[i].length; j++){
            
            if (polySquare[i][j] === letter){
              return (`${j + 1}${i + 1}`);
            }
            
            if (letter === "i" || letter === "j"){
              return ("42")
            }
            
            if (letter === " "){
              return (" ")
            }            
            
          }
        }
      })
      return (code.join(""))
    }
//decoder
let code = "";
        for (let i = 0; i < newInput.length; i += 2){
          if (newInput[i] === " ") {
            code += " ";
            i--;
            continue;
          }
          if(!newInput[i + 1]){
            return false;
          }
          code += polySquare[newInput[i + 1] -1][newInput[i] - 1];
        }
        return (code)
      }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
