import * as React from 'react';
import { QRElements } from '../../interfaces';
import { Link } from 'react-router-dom';

export const QRListItem = ({id, title, qr_code}: QRElements) => (
  <>
    <Link to={`/community/${id}`}>
      <img src={qr_code} alt={qr_code} />
    </Link>
    <h4>Created By: {title}</h4>
  </>
)

export default QRListItem;
