import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import HowayEditor from './components/howayEditor/HowayEditor';

ReactDOM.render(
  <React.StrictMode>
    <HowayEditor upload={"http://localhost:8081/img/upload"} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
