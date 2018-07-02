// import React from 'react';
// import ReactDOM from 'react-dom';

// ReactDOM.render(
//     React.createElement(
//       'div',
//       {},
//       React.createElement('h1', { className: 'flowers' }, 'Hello World!')
//     ),
//     document.getElementById('root')
//   );


//   ReactDOM.render(
//     React.createElement(
//       'a',
//       { href: 'https://www.google.com' },
//       'Take me to Google.com!'
//     ),
//     document.getElementById('root')
//   );



// ReactDOM.render(
//     React.createElement(
//       'ul',
//       {},
//       React.createElement('li', {}, 'Apples'),
//       React.createElement('li', {}, 'Oranges'),
//       React.createElement('li', {}, 'Mangos')
//     ),
//     document.getElementById('root')
//   );



  ReactDOM.render(
    React.createElement(
      'ul',
      {},

      React.createElement(
        'li',
        {},
        'Apples',
        React.createElement(
          'ul',
          {},
          React.createElement('li', {}, '$1.00 per lb')
        )
      ),

      React.createElement(
        'li',
        {},
        'Oranges',
        React.createElement(
          'ul',
          {},
          React.createElement('li', {}, '$.70 per lb')
        )
      ),

      React.createElement(
        'li',
        {},
        'Mangos',
        React.createElement('ul', {}, React.createElement('li', {}, '$2.00 each'))
      )

    ),
    document.getElementById('root')
  );

//cleaning up the code

// import React from 'react';
// import ReactDOM from 'react-dom';

// const apples = React.createElement(
//   'ul',
//   {},
//   React.createElement('li', {}, '$1.00 per lb')
// );
// const oranges = React.createElement(
//   'ul',
//   {},
//   React.createElement('li', {}, '$.70 per lb')
// );
// const mangos = React.createElement(
//   'ul',
//   {},
//   React.createElement('li', {}, '$2.00 each')
// );

// ReactDOM.render(
//   React.createElement(
//     'ul',
//     {},
//     React.createElement('li', {}, 'Apples', apples),
//     React.createElement('li', {}, 'Oranges', oranges),
//     React.createElement('li', {}, 'Mangos', mangos)
//   ),
//   document.getElementById('root')
// );

//next

import React from 'react';
import ReactDOM from 'react-dom';

const applesPrice = React.createElement('li', {}, '$1.00 per lb');
const apples = React.createElement('ul', {}, applesPrice);

const orangesPrice = React.createElement('li', {}, '$.70 per lb');
const oranges = React.createElement('ul', {}, orangesPrice);

const mangosPrice = React.createElement('li', {}, '$2.00 each');
const mangos = React.createElement('ul', {}, mangosPrice);

ReactDOM.render(
  React.createElement(
    'ul',
    {},
    React.createElement('li', {}, 'Apples', apples),
    React.createElement('li', {}, 'Oranges', oranges),
    React.createElement('li', {}, 'Mangos', mangos)
  ),
  document.getElementById('root')
);



import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <ul>
    <li>Apples</li>
    <ul>
      <li>$1.00 per lb</li>
    </ul>
    <li>Oranges</li>
    <ul>
      <li>$.70 per lb</li>
    </ul>
    <li>Mangos</li>
    <ul>
      <li>$2.00 each</li>
    </ul>
  </ul>,
  document.getElementById('root')
);

ReactDOM.render(
  <ul>
    <li>Colors</li>
    <ul>
      <li>$1.00 per lb</li>
      <li>$1.00 per lb</li>
      <li>$1.00 per lb</li>
    </ul>
    <li>Music</li>
    <ul>
      <li>$.70 per lb</li>
      <li>$.70 per lb</li>
      <li>$.70 per lb</li>
    </ul>
    <li>Food</li>
    <ul>
      <li>$2.00 each</li>
      <li>$2.00 each</li>
      <li>$2.00 each</li>
    </ul>

  </ul>,
  document.getElementById('root')
);

// Lesson two

// Lesson two

// Lesson two

