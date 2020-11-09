const URL = process.env.REACT_APP_API_URL;

const createQrCode = ({title, url}: {title: string, url: string}) => {
  return fetch(`${URL}/qrcodes`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
    body: JSON.stringify({title: `${title}`, url: `${url}`})
  })
    .then(res => res.json());
}

const getAllQrCodes = () => {
  return fetch(`${URL}/qrcodes`)
    .then(res => res.json());
}

const getQrCode = (id: number) => {
  return fetch(`${URL}/qrcodes/${id}`)
    .then(res => res.json())
}

export {
  createQrCode,
  getAllQrCodes,
  getQrCode
};
