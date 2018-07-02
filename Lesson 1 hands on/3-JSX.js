import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  React.createElement(
    'div',
    { className: 'flower' },
    React.createElement('h1', {}, 'Hello World!')
  ),
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <div class="flower">
    <h1>Hello</h1>
  </div>,
  document.getElementById('root')
);