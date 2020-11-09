const URL = process.env.REACT_APP_API_URL;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const createQrCode = async({title, url}) => {
  const newQrCode = await fetch(`${URL}/qrcodes`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
    body: JSON.stringify({title: `${title}`, url: `${url}`})
  });

  return newQrCode.json();
}

const getAllQrCodes = async() => {
  const fetchingQrCodes = await fetch(`${URL}`);

  return fetchingQrCodes.json();
}

export {
  createQrCode,
  getAllQrCodes
};
