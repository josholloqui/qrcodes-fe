import * as React from 'react';
import { useHomeForm } from '../../hooks/HomeHooks';

export const HomeQrInput = () => {
  const {
    values,
    handleChange,
    handleSubmit
  } = useHomeForm();

  return (
    <form onSubmit={handleSubmit} >
      <h1>Create a QR Code</h1>

      <label>Enter a URL</label>
      <input
        type='url'
        name='url'
        onChange={handleChange}
        value={values.url}
      />

      <label>Created By:</label>
      <input
        type='text'
        name='title'
        onChange={handleChange}
        value={values.title}
      />

      <button type='submit'>Submit</button>
    </form>
  )
};

export default HomeQrInput;
