# Gabriel Amodeo Elbling
# Prog. Paradigms
# HW 6, Q2

import random

class CurrrentWord:

    def __init__(self, word) -> None:
        self.word           = word
        self.goodLetters    = []
        self.badLetters     = []
        self.correctLetters = [''] * len(word)

    def add(self, letter, status, position=None):

        if status == 'good':
            self.goodLetters.append(letter)
        
        if status == 'bad':
            self.badLetters.append(letter)

        if status == 'correct':
            self.correctLetters[position] = letter


def runWordle(answer, words):

    attemptsRemaining = 6

    while (attemptsRemaining > 0):
        
        userEntry = input('Enter a 5 letter word: ')
        userEntry = userEntry.upper()

        if not isValidWord(userEntry, words):
            print('-- ERROR: please enter a valid 5 letter word! --')
            continue

        if answer.word == userEntry:
            print('Congratulations, you correctly identified the word after ' + str(attemptsRemaining) + ' attempts!')
            break

        attemptsRemaining -= 1

        decomposeWord(answer, userEntry)
        printGameState(answer,attemptsRemaining)

    if attemptsRemaining == 0:
        print('The answer is ' + str(answer.word) + '. You did not correctly guess it within 6 tries.')


def printGameState(answer, attempts):
    print('---- Current Game State: ----')
    print(' Attempts remaining: ' + str(attempts))
    print(' Good    letters: ' + str(answer.goodLetters))
    print(' Bad     letters: ' + str(answer.badLetters))
    print(' Correct letters: ' + str(answer.correctLetters))
    print('-----------------------------')

def decomposeWord(answer, word):

    wordList    = list(word)
    answerList  = list(answer.word)

    for i in range(len(wordList)):

        if wordList[i] in answerList and i == answerList.index(wordList[i]):
            answer.add(wordList[i], 'correct', i)

        if wordList[i] in answerList and wordList[i] not in answer.goodLetters:
            answer.add(wordList[i], 'good')
        
        if wordList[i] not in answerList and wordList[i] not in answer.badLetters:
            answer.add(wordList[i], 'bad')


def isValidWord(word, words):
    if len(word) != 5 or word not in words:
        return False
    else:
        return True



def main():

    file = open('words.txt', 'r')
    words = [x.strip() for x in file.readlines()]

    currWord = CurrrentWord(random.choice(words))

    runWordle(currWord, words)


# when the scipt is executed, execute the main function
if __name__ == '__main__':
    main()
