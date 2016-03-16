
import React from 'react';
import Style from './style.css';

class Layout extends React.Component {
    render() {
        return (
            <div id="page" className={`container ${Style.container}`}>
                {this.props.children}
            </div>
        );
    }
};

export default Layout;
