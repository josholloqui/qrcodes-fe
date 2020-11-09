import { useEffect, useState } from 'react';
import { getAllQrCodes, getQrCode } from '../service/qrcodeAPI';
import { QRCode } from '../interfaces';

const useGetAllQrCodes = () => {
  const [qrCodes, setQrCodes] = useState<QRCode[]>([{
    id: 1,
    title: '',
    url: '',
    qr_code: '',
    createdAt: '',
    updatedAt: ''
  }]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllQrCodes()
      .then((qrCodes) => setQrCodes(qrCodes))
      .finally(() => setLoading(false))
  })

  return {
    qrCodes,
    loading
  }

}

const useGetQrCode = (id: number) => {
  const [details, setDetails] = useState<QRCode>({
    id: 1,
    title: '',
    url: '',
    qr_code: '',
    createdAt: '',
    updatedAt: ''
  })
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getQrCode(id)
      .then(details => setDetails(details))
      .finally(() => setLoading(false));
  }, [id]);

  return {
    details,
    loading
  }


}

export {
  useGetAllQrCodes,
  useGetQrCode
}
