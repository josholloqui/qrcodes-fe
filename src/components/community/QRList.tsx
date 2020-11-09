import * as React from 'react';
import { useGetAllQrCodes } from '../../hooks/CommunityHook';
import QRListItem from './QrListItem';

export const HomeQRList = () => {
  const {
    qrCodes,
    loading
  } = useGetAllQrCodes();

  const qrElements = qrCodes.map(qrCode => (
    <li key={qrCode.id}>
      <QRListItem {...qrCode} />
    </li>
  ))

  if(loading) return<h1>Loading...</h1>
  return (
    <ul>
      {qrElements}
    </ul>
  )
}

export default HomeQRList;
