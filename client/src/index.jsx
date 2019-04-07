import React from 'react';
import ReactDOM from 'react-dom';
import ConnectedCheckout from './components/ConnectedCheckout';

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div><ConnectedCheckout /></div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('checkout'));
