import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MapWidget from './MapWidget';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MapWidget />, div);
  ReactDOM.unmountComponentAtNode(div);
});
