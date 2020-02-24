import {correctGuess, actionTypes } from './'

describe('correctGuess', ()=>{
    test('returns an action with type  "GURRECT_GUESS"', ()=>{
        const action = correctGuess();
        expect(action).toEqual({ type: actionTypes.CORRECT_GUESS})
    })
});