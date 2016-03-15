
import React from 'react';
import Style from './style.css';
import { connect as Connect } from 'react-redux';

@Connect(state => ({
    counter: state.counter
}))
class AppView extends React.Component {
    static propTypes = {
        counter: React.PropTypes.number.isRequired
    }

    render() {
        const {counter} = this.props;

        return (
            <div id="counter">
                <div className={`container ${Style.container}`}>
                    Counter {counter}
                </div>
            </div>
        );
    }
};

export default AppView;
