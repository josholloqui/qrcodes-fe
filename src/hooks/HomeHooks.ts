import { useState } from 'react';
import { createQrCode } from '../service/qrcodeAPI';
import { CreateQR, QRCode } from '../interfaces';

const useHomeForm = () => {
  const [values, setValues] = useState<CreateQR>({
    title: '',
    url: ''
  });
  const [qrCode, setQrCode] = useState<QRCode>({
    id: 1,
    title: '',
    url: '',
    qr_code: '',
    createdAt: '',
    updatedAt: ''
  })

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const qrCode = await createQrCode(values);

    setQrCode(qrCode);

    return qrCode;
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { name, value } = target;
    setValues({ ...values, [name]: value });
  };

  return {
    values,
    qrCode, 
    handleSubmit,
    handleChange
  }
}

export {
  useHomeForm
};
