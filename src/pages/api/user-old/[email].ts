import { NowRequest, NowResponse } from '@vercel/node'
import { MongoClient, Db } from 'mongodb'

let cachedDb: Db = null

const connectToDatabase = async (uri: string) => {
  if (cachedDb) {
    return cachedDb
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  const db = client.db('moveit')

  cachedDb = db

  return db
}

export default async function (request: NowRequest, response: NowResponse) {
  if (request.method === 'GET') {
    const { email } = request.query
    try {
      const db = await connectToDatabase(process.env.DATABASE_URL)

      const collection = db.collection('users')

      const user = await collection.findOne({ email: email })
      return response.status(200).json({ success: true, user: user || {} })
    } catch (e) {
      console.log('FAILED GET', e)
      return response.status(400).json({ success: false })
    }
  } else {
    return response
      .status(200)
      .json({ success: true, message: 'by Alquipo Neto' })
  }
}
