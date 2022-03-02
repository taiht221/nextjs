import type { NextApiRequest, NextApiResponse } from 'next'
import Cookies from 'cookies'

type Data = {
  message: string
}
export const config = {
  api: {
    bodyParser: false,
  },
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'POST') {
    return res.status(404).json({ message: 'method bot supported' })
  }

  const cookies = new Cookies(req, res)
  cookies.set('accessToken')

  res.status(200).json({ message: "You've been log out" })
}
