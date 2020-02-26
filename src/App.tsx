import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSecretWord } from './actions';

import GuessedWords from './GuessedWords';
import Congrats from './Congrats';

import './App.css';
import Input from './Input';

export class UnconnectedApp extends Component {
    componentDidMount(): void {
        // get the secret word
        // @ts-ignore
        this.props.getSecretWord();
    }

    render() {
        // @ts-ignore
        return (
            <div className="container">
                <h1>Jotto</h1>
                <Congrats success={this.props.success} />
                <Input />
                <GuessedWords guessedWords={this.props.guessedWords} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { success, guessedWords, secretWord } = state;
    return {
        success,
        guessedWords,
        secretWord
    }
};

export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp);
