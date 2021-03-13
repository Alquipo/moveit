import { getSession } from 'next-auth/client'
import { NowRequest, NowResponse } from '@vercel/node'
import connectToDatabase from 'services/database'

export default async function (request: NowRequest, response: NowResponse) {
  if (request.method === 'GET') {
    const session = await getSession({ req: request })

    if (!session) {
      response.status(400).json({ error: 'Please login first' })
      return
    }

    const db = await connectToDatabase()

    return new Promise((resolve, reject) => {
      db.find()
        .sort({ totalExp: -1 })
        .toArray((err, docs) => {
          if (err)
            return response
              .status(400)
              .json({ success: false, error: reject(err) })

          return response.status(200).json({
            success: true,
            message: 'Developer by Alquipo Neto',
            users: docs
          })
        })
    })
  } else {
    return response
      .status(200)
      .json({ success: true, message: 'by Alquipo Neto' })
  }
}
