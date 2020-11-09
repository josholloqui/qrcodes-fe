import * as React from 'react';
import { useGetQrCode } from '../../hooks/CommunityHook';


export const QRDetails = ({ match: { params: {id}}}: {match: { params: {id: number}}}) => {
  const {
    details,
    loading
  } = useGetQrCode(id);

  if(loading) return <h1>Loading...</h1>
  return (
    <section>
      <img src={details.qr_code} alt={details.url} />
      <h2>Created By: {details.title}</h2>
      <p>URL: {details.url}</p>
      <p>Created on {details.createdAt}</p>
      <p>It was updated on {details.updatedAt}</p>
    </section>
  )
}

export default QRDetails;
