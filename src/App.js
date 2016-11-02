import React, { Component } from 'react';
import Timeline from 'react-calendar-timeline';
import moment from 'moment';

const groups = [
  {id: 1, title: 'Group 1'}
];

const items = [];

class App extends Component {
  render() {
    return (
      <div className="App">
      <Timeline groups={groups}
          items={items}
          defaultTimeStart={moment().add(-12, 'hour')}
          defaultTimeEnd={moment().add(12, 'hour')}
          minZoom={1000 * 60 * 60}
          maxZoom={1000 * 60 * 60 * 24 * 7}
      />
      </div>
    );
  }
}

export default App;
