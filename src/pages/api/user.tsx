import { NowRequest, NowResponse } from '@vercel/node'
import connectToDatabase from 'utils/database'

export default async function (request: NowRequest, response: NowResponse) {
  const db = await connectToDatabase()

  const collection = db.collection('users').insertOne({
    name: 'teste'
  })

  response.status(200).json((await collection).ops[0])
}
