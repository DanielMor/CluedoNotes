import React, { Component } from 'react';
import CluedoLine from './CluedoLine';
import './CluedoSection.css';

class CluedoSection extends Component {

  renderLine(line, index) {
    return <CluedoLine key={'line-' + index} title={line.name} color={line.color} />;
  }

  render() {
    return (
      <section className="CluedoSection">
        <span>{this.props.title}</span>
        {this.props.lines.map(this.renderLine)}
      </section>
    );
  }
}

CluedoSection.defaultProps = {
  title: 'Section',
  lines: [],
}

export default CluedoSection;
