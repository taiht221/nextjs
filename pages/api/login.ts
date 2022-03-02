import type { NextApiRequest, NextApiResponse } from 'next'
import httpProxy, { ProxyResCallback } from 'http-proxy'
import Cookies from 'cookies'
type Data = {
  message: string
}

export const config = {
  api: {
    bodyParser: false,
  },
}

const proxy = httpProxy.createProxyServer()

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'POST') {
    return res.status(404).json({ message: 'method bot supported' })
  }

  return new Promise((resolve) => {
    //  dont send cookies to Api sever
    req.headers.cookie = ''

    const handleLoginResponseL: ProxyResCallback = (proxyRes, req, res) => {
      let body = ''
      proxyRes.on('data', function (chunk) {
        body += chunk
      })
      proxyRes.on('end', function () {
        try {
          const { accessToken, expireAt } = JSON.parse(body)

          const cookies = new Cookies(req, res, { secure: process.env.NODE_ENV !== 'development' })

          cookies.set('accessToken', accessToken, {
            httpOnly: true,
            sameSite: 'lax',
            expires: new Date(expireAt),
          })
          ;(res as NextApiResponse).status(200).json({ message: 'login successfullly' })
        } catch (error) {
          ;(res as NextApiResponse).status(500).json({ message: 'something went wrong' })
        }

        resolve(true)
      })
    }

    proxy.once('proxyRes', handleLoginResponseL)

    proxy.web(req, res, {
      target: process.env.API_URL,
      changeOrigin: true,
      selfHandleResponse: true,
    })
  })
}
