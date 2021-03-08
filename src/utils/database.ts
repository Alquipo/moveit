import { MongoClient } from 'mongodb'

const client = new MongoClient(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

export default async function connectToDatabase() {
  if (!client.isConnected()) await client.connect()

  const db = client.db('moveit')

  return db
}
