

const URL = process.env.REACT_APP_API_URL;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const createQrCode = async(title, url) => {
  const okay = await fetch(`${URL}/qrcodes`, {
    method: 'POST',
    mode: 'no-cors',
    headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
    body: JSON.stringify({title: `${title}`, url: `${url}`})
  });
  console.log(okay.body);

  return okay.body;
}

export {
  createQrCode
};
