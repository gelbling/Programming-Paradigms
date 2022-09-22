// Gabriel Amodeo Elbling
// Prog. Paradigms
// Activity HW3, Q4

// import file stream method
var fs = require('fs');

// game state class
class GameState{
	constructor(good_letters, bad_letters, correct_letters){
		this.good_letters = good_letters;
		this.bad_letters = bad_letters;
		this.correct_letters = correct_letters;
	}
}

var obj1 = new GameState(["O","A", "J"],["Q","W","E","R","T","Y","M", "K", "N"],[undefined, undefined, undefined, undefined, undefined]);

function wordleHelper(state){ 

    // open a file stream with the text file, convert it to a string, and split by new lines
    // each array element will be a word
    var words = fs.readFileSync("five-letter-words.txt","utf8").toString().split("\n");

    // initialize frequent words array
    var freqWords       = [];

    // initialize non frequent words array
    var nonFreqWords    = [];

    // loop through each word in the array
    for (let i = 0; i<words.length; i++){

        // create a variable to store if bad letters exist in the word
        var badLetters = false;

        // create a variable to store if the good letters are in the word
        var goodLetter = false;

        // create a varible to store if letters are in the correct position
        var correctPos = false;

        // create a variable to store the current word
        var currWord;

        // create a variable to store if the word is common or not
        var common     = false;

        // create a variable to store if the correct_letters array is completely undefined
        var allUndef   = true;

        // check if all values in the correct_letters array are undefined
        // if they are all undefined, allUndef = true, if not, allUndef = false
        for (let ii = 0; ii<state.correct_letters.length; ii++){
            if (state.correct_letters[ii] != undefined){
                allUndef = false;
                break;
            }
        }

        // check if the current word is common, if so, change the common variable to true
        // and make the assign the current word to the currWord variable without the *
        if (words[i].includes('*')){
            common = true;
            currWord = words[i].replace('*','');
        }
        // else the the word is not common and is stored without replacements
        else{
            currWord = words[i];
        }

        // loop through the bad_letters array and check if there are any bad letters in the word
        // if there are badLetters = true
        for (let ii = 0; ii<state.bad_letters.length; ii++){
            if(currWord.includes(state.bad_letters[ii])){
                badLetters = true;
                break;
            }
        }

        // initalize a letter count variable to store the amount of matched good letters
        var letterCount = 0;
        // loop through the good_letters array and check if each letter is in the current word
        // if it is, augment the letterCounter by 1
        for (let ii = 0; ii<state.good_letters.length; ii++){
            if(currWord.includes(state.good_letters[ii])){
                letterCount += 1;
            }
        }

        // check if the letter counter is the same as the good_letters array length
        // this means that each letter appears at least once in the word, so the goodLetter variable is changed to true
        if (letterCount == state.good_letters.length){
            goodLetter = true;
        }

        // if all the correct_letters elements are not undefined, check if the individual letters and their idicies
        // match the current words, if so, change the correct position variable to true
        // if the letter and indicies do not match, change the correct position variable to false
        if(allUndef == false){
            for (let ii = 0; ii<state.correct_letters.length; ii++){
                if (state.correct_letters[ii] != undefined && currWord[ii] == state.correct_letters[ii]){
                    correctPos = true;
                }
                // this makes sure the current index is not undefined and breaks the loop because if 
                // one letter or array is not the same, then it is already invalid
                else if(state.correct_letters[ii] != undefined){
                    correctPos = false;
                    break;
                }
            }
        }
        // if the correct_letters elements are all undefined, then change the correct position variable to true,
        // because the correct positions then don't mattter
        else{
            correctPos = true;
        }

        // check if bad letters is false (meaning there are no bad letters)
        // check if each good letter is in the word at least once
        // check if the word has all the correct positions and letters
        // if all of these are satisfied, we want to add the word to the list
        if(badLetters == false && goodLetter == true && correctPos == true){
            // if the word is common, add it to the freqWords array
            if(common){
                freqWords.push(currWord);
            }
            // if the word is not common, add it to the not common words array
            else{
                nonFreqWords.push(currWord);
            }
        }

    }

    // sort both arrays alphabetically
    freqWords       = freqWords.sort();
    nonFreqWords    = nonFreqWords.sort();

    // return the concatenation of common words array with non common words array, having common words at the beginning
    return freqWords.concat(nonFreqWords);

}

console.log(wordleHelper(obj1));