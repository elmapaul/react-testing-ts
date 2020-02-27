import React, { Component } from 'react';
import { connect } from 'react-redux';

import { guessWord} from './actions';

export class UnconnectedInput extends Component {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(props) {
        super(props);

        // initialize state
        this.state = { currentGuess: null }

        // bind this for submitGuessedWord
        this.submitGuessedWord = this.submitGuessedWord.bind(this);
    }

    submitGuessedWord(evt){
        evt.preventDefault();
        // @ts-ignore
        const guessedWord = this.state.currentGuess;

        if (guessedWord && guessedWord.length > 0) {
            // @ts-ignore
            this.props.guessWord(guessedWord);
        }

            this.setState({ currentGuess: ''} )
    }

    render() {
        // @ts-ignore
        const contents = this.props.success
        ? null
        : ( <form className="form-inline">
            <input data-test="input-box"
                   className="mb-2 mx-sm-3"
                   type="text"
                   value={this.state.currentGuess}
                   onChange={(evt)=>this.setState({ currentGuess: evt.target.value })}
                   placeholder="enter guess"
            />
            <button
                data-test="submit-button"
                type="submit"
                className="btn btn-primary mb-2"
                onClick={()=> this.props.guessWord('train')}
            >
                Submit
            </button>
        </form>
        );

        // TODO: onClick={()=> this.props.guessWord('train')} should be onClick={()=> this.props.guessWord('')} according to the lesson

        return (
            <div data-test="component-input">
                { contents }
            </div>
        );
    }
}

const mapStateToProps = ({ success }) => {
    return { success }
}

export default connect(mapStateToProps, { guessWord })(UnconnectedInput);