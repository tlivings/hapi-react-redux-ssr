
import React from 'react';
import Style from './style.css';

class AppView extends React.Component {
  render() {
    return (
      <div id="app-view">
        <div className={`container ${Style.container}`}>
            Hello World
        </div>

        {this.props.children}
      </div>
    );
  }
};

export default AppView;
