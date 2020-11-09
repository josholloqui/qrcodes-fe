import { useEffect, useState } from 'react';
import { createQrCode, getAllQrCodes } from '../service/qrcodeAPI';
import { CreateQR, QRCode } from '../interfaces';

const useHomeForm = () => {
  const [values, setValues] = useState<CreateQR>({
    title: '',
    url: ''
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const qrCode = await createQrCode(values);

    return qrCode;
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { name, value } = target;
    setValues({ ...values, [name]: value });
  };

  return {
    values, 
    handleSubmit,
    handleChange
  }
}

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



export {
  useHomeForm,
  useGetAllQrCodes
};
