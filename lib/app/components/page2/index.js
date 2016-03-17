
import React from 'react';
import { connect as Connect } from 'react-redux';
import { Link } from 'react-router';

class Page2View extends React.Component {
    render() {
        return (
            <div>
                <p>
                    Page 2 [<Link to='/'>back</Link>]
                </p>
            </div>
        );
    }
};

export default Page2View;
