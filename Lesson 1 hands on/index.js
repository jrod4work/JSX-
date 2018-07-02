import React from 'react';
import ReactDOM from 'react-dom';
 
const color1 = React.createElement('li', { className:'colors'}, 'Black');
const color2 = React.createElement('li', {className:'colors'}, 'Orange');
const color3 = React.createElement('li', {className:'colors'}, 'Blue');
const colors = React.createElement('ol', {}, color1,color2,color3);

const music1 = React.createElement('li', {}, 'Techno');
const music2 = React.createElement('li', {}, 'Latin Music');
const music3 = React.createElement('li', {}, 'Classic Rock');
const music = React.createElement('ol', {}, music1,music2,music3);

const food1 = React.createElement('li', {}, 'Pasta');
const food2 = React.createElement('li', {}, 'Knowledge');
const food3 = React.createElement('li', {}, 'I scream');
const food = React.createElement('ol', {}, food1,food2,food3);

const website1 = React.createElement('ol',{},React.createElement('a', { href: 'https://www.youtube.com' }, '1.www.youtube.com'));
const website2 = React.createElement('ol', {}, React.createElement( 'a', { href: 'https://www.chess.com' },'2.www.chess.com'));
const website3 = React.createElement('ol',{}, React.createElement( 'a',{ href: 'https://www.gmail.com' }, '3.www.gmail.com' ));

ReactDOM.render(
  React.createElement(
    'ul',
    {},
    React.createElement('h1', { className: 'flowers' }, 'My Favorite Things Today!'),
    React.createElement('li', {}, 'Favorite Colors', colors),
    React.createElement('li', {}, 'Favorite Music', music),
    React.createElement('li', {}, 'Favorite Food', food),
    React.createElement('li', {}, 'Favorite Websites', 
    React.createElement('ol',{}, website1, website2, website3)
  )
),
  document.getElementById('root')
);

