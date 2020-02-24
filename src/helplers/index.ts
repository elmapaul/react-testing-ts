export function getLetterMatchCount(guessedWord, secretWord){
    const secretLetterSet = new Set(secretWord.split(''));
    const guessedLetterSet = new Set(guessedWord.split(''));
    // @ts-ignore
    return [...secretLetterSet].filter(letter => guessedLetterSet.has(letter)).length;
}