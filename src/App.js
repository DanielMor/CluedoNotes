import React, { Component } from 'react';
import CluedoSection from './components/CluedoSection';
import { sections } from './data/cluedo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="container">
          <h2>Cluedo Notes</h2>
          
          {sections.map((section, index) => <CluedoSection key={'section-' + index} {...section} />)}
        </section>
      </div>
    );
  }
}

export default App;
