import React, { Component } from 'react';
import { connect } from 'react-redux';

import { guessWord} from './actions';

class Input extends Component {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(props) {
        super(props);

    }

    render() {
        // @ts-ignore
        const contents = this.props.success
        ? null
        : ( <form className="form-inline">
            <input data-test="input-box"
                   className="mb-2 mx-sm-3"
                   type="text"
                   placeholder="enter guess"
            />
            <button
                data-test="submit-button"
                type="submit"
                className="btn btn-primary mb-2"
            >
                Submit
            </button>
        </form>
        );

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

export default connect(mapStateToProps, { guessWord })(Input);