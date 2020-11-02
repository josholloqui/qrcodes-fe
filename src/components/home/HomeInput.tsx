/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import { createQrCode } from '../../service/qrcodeAPI';

export const HomeQrInput = () => {

  const [title, setTitle] = React.useState('');
  const [url, setUrl] = React.useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    createQrCode(title, url);
  };
  
  const handleTitleChange = ({ target }: {target: any}) => {
    setTitle(target.value);
  };

  const handleUrlChange = ({ target }: {target: any}) => {
    setUrl(target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" onChange={handleTitleChange} />
        <input type="text" placeholder="url" onChange={handleUrlChange} />
        <button>Post</button>
      </form>
    </div>
  );
};

export default HomeQrInput;
