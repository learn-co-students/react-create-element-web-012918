// Code goes here
import React from 'react';
import ReactDom from 'react-dom'


const title = React.createElement('h1', {}, "My first react code")
const paragraph = React.createElement('p', {}, "Some really cool stuff. Gotta love react")
const container = React.createElement('div', {}, [title, paragraph])


const list = React.createElement('h1', {},
    React.createElement('h1', {}, 'My favorite ice cream flavors'),
    React.createElement('ul', {},
      [
        React.createElement('li', { className: 'brown' }, 'Chocolate'),
        React.createElement('li', { className: 'white' }, 'Vanilla'),
        React.createElement('li', { className: 'yellow' }, 'Banana')
      ]
    )
  );

ReactDom.render(
  list,
  document.getElementById('global')
);
