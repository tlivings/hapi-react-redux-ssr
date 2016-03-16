
import React from 'react';
import { connect as Connect } from 'react-redux';
import { Link } from 'react-router';
//import { bindActionCreators as BindActionCreators } from 'redux';
//import { add as Add, sub as Sub } from '../../actions';

@Connect(state => ({
    counter: state.counter
}))
class HomeView extends React.Component {
    static propTypes = {
        counter: React.PropTypes.object.isRequired//,
        //dispatch: React.PropTypes.func.isRequired
    }

    render() {
        const {counter/*, dispatch*/} = this.props;
        //const actions = BindActionCreators({ add, sub }, dispatch);

        return (
            <div>
                <p>
                    Page 1
                </p>
                <p>
                    Counter {counter.count} [<Link to='/page2'>next</Link>]
                </p>
            </div>
        );
    }
};

export default HomeView;
