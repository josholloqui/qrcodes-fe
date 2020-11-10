import * as React from 'react';
import { useGetQrCode } from '../../hooks/CommunityHook';
import { Link, useHistory } from 'react-router-dom';


export const QRDetails = ({ match: { params: {id}}}: {match: { params: {id: number}}}) => {
  const {
    details,
    loading,
    handleDelete,
    handleChange,
    handleSubmit,
    update
  } = useGetQrCode(id);

  const history = useHistory();

  const returnToCommunity = () => {
    setTimeout(() => history.push('/community'), 1000)
  }
    

  if(loading) return <h1>Loading...</h1>
  return (
    <>
      <section>
        <img src={details.qr_code} alt={details.url} />
        <h2>Created By: {details.title}</h2>
        <p>URL: {details.url}</p>
        <p>Created on {details.createdAt}</p>
        <p>It was updated on {details.updatedAt}</p>
      </section>
      <div>
        <Link to='/'>
          <button onClick={handleDelete}>Delete</button>
        </Link>
        
        <form onSubmit={handleSubmit} >
          <h1>Update QR Code</h1>

          <label>Enter a URL:</label>
          <input
            type='url'
            name='url'
            onChange={handleChange}
            value={update.url}
          />

          <label>Created By:</label>
          <input
            type='text'
            name='title'
            onChange={handleChange}
            value={update.title}
          />
          
          <button type='submit' onClick={returnToCommunity}>Update</button> 
  
      </form>
      </div>
    </>
  )
}

export default QRDetails;
