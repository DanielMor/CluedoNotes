import React, { Component } from 'react';
import './CluedoAnswer.css';
import options from '../data/options';

class CluedoAnswer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'none',
      isOpen: false,
    };
  }

  renderIcon() {
    if(this.state.selected !== 'none') {
      return <span><i className={"fas " + this.state.selected}></i></span>;
    }
  }

  renderOption(option, index) {
    let { icon } = option;

    return <li key={`icon-${index}`} onClick={() => this.handleIconClick(icon)}>
      {icon !== 'none' ? <i className={`fas ${icon}`}></i> : null}
    </li>
  }

  renderOptions() {
    if(this.state.isOpen) {
      return <ul>
        {options.map(this.renderOption.bind(this))}
      </ul>;
    }
  }

  handleIconClick(icon) {
    this.setState({
      selected: icon
    });
  }

  handleClick(e) {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div className="CluedoAnswer" onClick={(e) => this.handleClick(e.target)}>
        {this.renderIcon()}
        {this.renderOptions()}
      </div>
    );
  }
}

export default CluedoAnswer;
