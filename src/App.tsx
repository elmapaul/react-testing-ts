import React, { Component } from 'react';

import GuessedWords from './GuessedWords';
import Congrats from './Congrats';

import './App.css';

class App extends Component {
    // constructor(props) {
    //     super(props);
    //
    //     this.state = {
    //         counter: 0
    //     }
    // }

    render() {
        return (
            <div className="container">
                <h1>Jotto</h1>
                <Congrats success={true} />
                <GuessedWords guessedWords={[
                    { guessedWord: 'train', letterMatchCount: 3}
                ]} />
            </div>
        );
    }
}

export default App;
