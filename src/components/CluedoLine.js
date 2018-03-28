import React, { Component } from 'react';
import './CluedoLine.css';
import CluedoAnswer from './CluedoAnswer';

class CluedoLine extends Component {
  render() {
    return (
      <div className="CluedoLine">
        <div className="title" style={{color: this.props.color }}>
          {this.props.title}
        </div>
        <div className="answers">
          <CluedoAnswer />
          <CluedoAnswer />
          <CluedoAnswer />
          <CluedoAnswer />
          <CluedoAnswer />
          <CluedoAnswer />
        </div>
      </div>
    );
  }
}

CluedoLine.defaultProps = {
  title: 'Line',
  color: '#000'
}

export default CluedoLine;
