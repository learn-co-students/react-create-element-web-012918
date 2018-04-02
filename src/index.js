import React from 'react';
import ReactDOM from 'react-dom';

const list =
  React.createElement('div', {},
    React.createElement('h1', {}, 'My favorite ice cream flavors'),
    React.createElement('ul', {},
      [
        React.createElement('li', {}, 'Chocolate'),
        React.createElement('li', {}, 'Vanilla'),
        React.createElement('li', {}, 'Banana')
      ]
    )
  );

ReactDOM.render(
  list,
  document.getElementById('global')
);
