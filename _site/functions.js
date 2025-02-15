//    const target = Math.floor(Math.random() * 100) + 1;
//    let numGuesses = 0;

function callTranspiler() {
//        numGuesses += 1;
    const targetLanguage = document.getElementById("lang").value;
    const resultParagraph = document.getElementById("result");
    const conversionCodeblock = document.getElementById("conversion");
//
    resultParagraph.innerHTML = "Your target language is " + targetLanguage;
    conversionCodeblock.innerHTML = "Hello World, written in " + targetLanguage;

//        if (guess == target) {
//            resultParagraph.innerHTML = "You got it! It took you " + numGuesses + " guesses.";
//        } else if (guess < target) {
//            resultParagraph.innerHTML = "Your guess is too low. Try again.";
//       } else if (guess > target) {
//            resultParagraph.innerHTML = "Your guess is too high. Try again.";
//        }
}
