# Gabriel Amodeo Elbling
# Prog. Paradigms
# HW 6, Q2

# import random library to get random word
import random

# create current word class
class CurrrentWord:

    # assign the passed argument word to the given parameters
    # initialze game state data structures
    def __init__(self, word) -> None:
        self.word           = word
        self.goodLetters    = []
        self.badLetters     = []
        self.correctLetters = [''] * len(word) # initialize to the size of the word

    # method to update game state data according to index and desired modifying state
    def add(self, letter, status, position=None):

        if status == 'good':
            self.goodLetters.append(letter)
        
        if status == 'bad':
            self.badLetters.append(letter)

        if status == 'correct':
            self.correctLetters[position] = letter


# running the game
def runWordle(answer, words):

    # initalize attempts
    attemptsRemaining = 6

    # while there are attemepty remaining
    while (attemptsRemaining > 0):
        
        # get the user's inputted word
        userEntry = input('Enter a 5 letter word: ')

        # make input uppercase to match word database format
        userEntry = userEntry.upper()

        # if the word is not valid print error message retry user input
        if not isValidWord(userEntry, words):
            print('-- ERROR: please enter a valid 5 letter word! --')
            continue

        # if the inputted word is correct, display congratulations message and end game
        if answer.word == userEntry:
            print('Congratulations, you correctly identified the word after ' + str(6 - attemptsRemaining) + ' attempts!')
            break

        # if it is a valid word and not the correct word, decrement remaining attempts my 1
        attemptsRemaining -= 1

        # parse the word comparing to answer word
        decomposeWord(answer, userEntry)

        # print the current game stae
        printGameState(answer,attemptsRemaining)

    # if there are no more attempts left, print failed message
    if attemptsRemaining == 0:
        print('The answer is ' + str(answer.word) + '. You did not correctly guess it within 6 tries.')


# print the current game state using string concatenation and casting
def printGameState(answer, attempts):
    print('---- Current Game State: ----')
    print(' Attempts remaining: ' + str(attempts))
    print(' Good    letters: ' + str(answer.goodLetters))
    print(' Bad     letters: ' + str(answer.badLetters))
    print(' Correct letters: ' + str(answer.correctLetters))
    print('-----------------------------')

# parse inputted word
def decomposeWord(answer, word):

    # create a list of both the user's inputted word and the answer word
    wordList    = list(word)
    answerList  = list(answer.word)

    # loop through the word's length, which will always be 5
    for i in range(len(wordList)):

        # if the word is in the correct spot, add it to the correct array in the right spot
        if wordList[i] in answerList and wordList[i] == answerList[i]:
            answer.add(wordList[i], 'correct', i)

        # if the current user input letter is in the answer word, add the letter to the correct array
        if wordList[i] in answerList and wordList[i] not in answer.goodLetters:
            answer.add(wordList[i], 'good')
        
        # if the current user input letter is not in the answer word, add the letter to the bad array
        if wordList[i] not in answerList and wordList[i] not in answer.badLetters:
            answer.add(wordList[i], 'bad')


# check if the word is valid
def isValidWord(word, words):
    if len(word) != 5 or word not in words:
        return False
    else:
        return True


# main function
def main():

    # read file
    file = open('words.txt', 'r')
    # extract and strip each line and store in array
    words = [x.strip() for x in file.readlines()]

    # choose random word
    randomWord = random.choice(words)

    # write the random word to an answer file
    with open('answer.txt', 'w') as f:
        f.write(randomWord)

    # initalize the current game's object
    currWord = CurrrentWord(randomWord)
    
    # run the game
    runWordle(currWord, words)


# when the scipt is executed, execute the main function directly
if __name__ == '__main__':
    main()