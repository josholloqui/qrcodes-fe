export interface CreateQR {
  title: string,
  url: string
}

export interface QRCode {
  id: number,
  title: string,
  url: string,
  qr_code: string,
  createdAt: string,
  updatedAt: string
}

export interface QRElements {
  id: number,
  title: string,
  url: string,
  qr_code: string
}
