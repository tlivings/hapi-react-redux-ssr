
import React from 'react';
import { connect as Connect } from 'react-redux';
import { Link } from 'react-router';

class HomeView extends React.Component {
    render() {
        return (
            <div>
                <p>
                    Page 1 [<Link to='/page2'>next</Link>]
                </p>
            </div>
        );
    }
}

export default HomeView;
