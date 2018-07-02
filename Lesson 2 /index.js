// import React from 'react';
// import ReactDOM from 'react-dom';

// ReactDOM.render(
//     <ul>
//     <li>Colors</li>
//     <ul>
//       <li>$1.00 per lb</li>
//       <li>$1.00 per lb</li>
//       <li>$1.00 per lb</li>
//     </ul>
//     <li>Music</li>
//     <ul>
//       <li>$.70 per lb</li>
//       <li>$.70 per lb</li>
//       <li>$.70 per lb</li>
//     </ul>
//     <li>Food</li>
//     <ul>
//       <li>$2.00 each</li>
//       <li>$2.00 each</li>
//       <li>$2.00 each</li>
//     </ul>
//     <li>Websites</li>
//     <ul>
//     <li> <a href="https://www.gmail.com">Gmail</a> </li>
//     <li>  <a href="https://www.gmail.com">Gmail</a> </li>
//     <li> <a href="https://www.gmail.com">Gmail</a> </li>
//     </ul>

//   </ul>,
// document.getElementById('root')
// );
// const item1 = 'Apples';
// const item1Price = '$1.00 per lb';
// const item2 = 'Oranges';
// const item2Price = '$.70 per lb';
// const item3 = 'Mangos';
// const item3Price = '$2.00 each';

// ReactDOM.render(
//     <ul>

//     <li>{item1}</li>
//     <ul>
//       <li>{item1Price}</li>
//     </ul>
//     <li>{item2}</li>
//     <ul>
//       <li>{item2Price}</li>
//     </ul>
//     <li>{item3}</li>
//     <ul>
//       <li>{item3Price}</li>
//     </ul>
    
//   </ul>,

  
//   document.getElementById('root')
//   );



// import React from 'react';
// import ReactDOM from 'react-dom';


// const groceryList = (
//   <ul>
//     <li>Apples</li>
//     <ul>
//       <li>$1.00 per lb</li>
//     </ul>
//     <li>Oranges</li>
//     <ul>
//       <li>$.70 per lb</li>
//     </ul>
//     <li>Mangos</li>
//     <ul>
//       <li>$2.00 each</li>
//     </ul>
//   </ul>
// );

// ReactDOM.render(groceryList, document.getElementById('root'));


// import React from 'react';
// import ReactDOM from 'react-dom';

// const groceryList = {
//   return (
//     <ul>
//       <li>Apples</li>
//       <li>Oranges</li>
//       <li>Mangos</li>
//     </ul>
//   );
// }

// ReactDOM.render(
//   groceryList,
//   document.getElementById('root')
// );


//FUNCTION*************

// import React from 'react';
// import ReactDOM from 'react-dom';

// function groceryList(item1, item2, item3) {
//   return (
//     <ul>
//       <li>{item1}</li>
//       <li>{item2}</li>
//       <li>{item3}</li>
//     </ul>
//   );
// }

// ReactDOM.render(
//   groceryList('Apples', 'Oranges', 'Mangos'),
//   document.getElementById('root')
// );


// import React from 'react';
// import ReactDOM from 'react-dom';

// const groceryList = (
//   <ul>
//     <li>Apples</li>
//     <ul>
//       <li>$1.00 per lb</li>
//     </ul>
//     <li>Oranges</li>
//     <ul>
//       <li>$.70 per lb</li>
//     </ul>
//     <li>Mangos</li>
//     <ul>
//       <li>$2.00 each</li>
//     </ul>
//   </ul>
// );

// ReactDOM.render(groceryList, document.getElementById('root'));

// import React from 'react';
// import ReactDOM from 'react-dom';

// const groceryList = (item1, item2, item3) => {
//   return (
//     <ul>
//       <li>{item1}</li>
//       <li>{item2}</li>
//       <li>{item3}</li>
//     </ul>
//   );
// };

// ReactDOM.render(
//   groceryList('Apples', 'Oranges', 'Mangos'),
//   document.getElementById('root')
// );



// import React from 'react';
// import ReactDOM from 'react-dom';

// function groceryList(item1, item1Price, item2, item2Price, item3, item3Price) {
//   return (
//     <ul>
//       <li>{item1}</li>
//       <ul>
//         <li>{item1Price}</li>
//       </ul>
//       <li>{item2}</li>
//       <ul>
//         <li>{item2Price}</li>
//       </ul>
//       <li>{item3}</li>
//       <ul>
//         <li>{item3Price}</li>
//       </ul>
//     </ul>
//   );
// }

// ReactDOM.render(
//   groceryList(
//     'Apples',
//     '$1.00 per lb',
//     'Oranges',
//     '$.70 per lb',
//     'Mangos',
//     '$2.00 each'
//   ),
//   document.getElementById('root')
// );


// *********// ES6

import React from 'react';
import ReactDOM from 'react-dom';

const groceryList = (
  item1,
  item1Price,
  item2,
  item2Price,
  item3,
  item3Price
) => {
  return (
    <ul>
      <li>{item1}</li>
      <ul>
        <li>{item1Price}</li>
      </ul>
      <li>{item2}</li>
      <ul>
        <li>{item2Price}</li>
      </ul>
      <li>{item3}</li>
      <ul>
        <li>{item3Price}</li>
      </ul>
    </ul>
  );
};

ReactDOM.render(
  groceryList(
    'Apples',
    '$1.00 per lb',
    'Oranges',
    '$.70 per lb',
    'Mangos',
    '$2.00 each'
  ),
  document.getElementById('root')
);
