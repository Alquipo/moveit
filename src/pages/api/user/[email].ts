import { NowRequest, NowResponse } from '@vercel/node'
import connectToDatabase from 'services/database'

export default async function (request: NowRequest, response: NowResponse) {
  if (request.method === 'GET') {
    const { email } = request.query

    if (!email) {
      response.status(400).json({
        success: false,
        message: 'Developer by Alquipo Neto',
        error: 'Missing e-mail on request query'
      })
      return
    }

    try {
      const db = await connectToDatabase()

      const collection = await db.findOne({
        email
      })

      if (!collection) {
        response.status(400).json({
          success: false,
          message: 'Developer by Alquipo Neto',
          error: `User with e-mail ${email} not found`
        })
        return
      }

      response.status(200).json({
        success: true,
        message: 'Developer by Alquipo Neto',
        user: collection || {}
      })
    } catch (error) {
      console.log('FAILED GET', error)
      return response.status(400).json({
        success: false,
        message: 'Developer by Alquipo Neto',
        error
      })
    }
  } else {
    response.status(400).json({
      success: false,
      error: 'Wrong request method',
      message: 'Developer by Alquipo Neto'
    })
  }
}
