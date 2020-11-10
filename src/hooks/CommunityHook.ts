import { useEffect, useState } from 'react';
import { deleteQrCode, getAllQrCodes, getQrCode, updateQrCode } from '../service/qrcodeAPI';
import { QRCode, UpdateQR } from '../interfaces';

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
  }, [])

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
  const [update, setUpdate] = useState<UpdateQR>({
    title: '',
    url: ''
  })

  useEffect(() => {
    getQrCode(id)
      .then(details => setDetails(details))
      .finally(() => setLoading(false));
  }, [id]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const qrCode = await updateQrCode(id, update);

    return qrCode;
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { name, value } = target;
    setUpdate({ ...update, [name]: value });
  };

  const handleDelete = () => {
    return deleteQrCode(id);
  };



  return {
    details,
    loading,
    handleDelete,
    handleSubmit,
    handleChange,
    update
  }


}

export {
  useGetAllQrCodes,
  useGetQrCode
}
