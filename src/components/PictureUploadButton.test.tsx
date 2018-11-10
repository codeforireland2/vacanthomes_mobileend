import * as React from 'react';
import * as ReactDOM from 'react-dom';
import PictureUploadButton from './PictureUploadButton';

it('renders without crashing', () => {
  const div = document.createElement('div');

  function onUpload(event: any) {
      //
    }
  ReactDOM.render(<PictureUploadButton onUpload={onUpload}> a button</PictureUploadButton>, div);
  ReactDOM.unmountComponentAtNode(div);
});
