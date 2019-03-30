import React from 'react';
import ReactDOM from 'react-dom';
import Checkout from './components/Checkout.jsx';

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div><Checkout /></div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('checkout'));
