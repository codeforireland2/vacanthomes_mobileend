import * as React from 'react';
import * as ReactDOM from 'react-dom';
import PictureUploadButton from './PictureUploadButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PictureUploadButton> a button</PictureUploadButton>, div);
  ReactDOM.unmountComponentAtNode(div);
});
