import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css';
import './styles/styles.css';

const App = () => (
  <div>
    <h1>Some default content from React.</h1>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));