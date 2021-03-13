import { NowRequest, NowResponse } from '@vercel/node'
import connectToDatabase from 'services/database'

type RequestBodyData = {
  name: string
  email: string
  level: number
  currentExp: number
  totalExp: number
  challengesCompleted: number
  photo: string
}
export default async function (request: NowRequest, response: NowResponse) {
  if (request.method === 'POST') {
    const {
      name,
      email,
      level,
      currentExp,
      totalExp,
      challengesCompleted,
      photo
    }: RequestBodyData = request.body

    //Verificar se existe os parâmetros correto na body
    if (
      !name ||
      !email ||
      !level ||
      !currentExp ||
      !totalExp ||
      !challengesCompleted ||
      !photo
    ) {
      response.status(400).json({
        success: false,
        message: 'Developer by Alquipo Neto',
        error: 'Missing body parameter'
      })
      return
    }

    const db = await connectToDatabase()

    const collection = await db.insertOne({
      name: name || 'Sem Nome no gitHub',
      email,
      level: level || 1,
      currentExp,
      totalExp,
      challengesCompleted,
      photo
    })

    response.status(200).json(collection.ops[0])
  } else {
    response.status(400).json({
      success: false,
      error: 'Wrong request method',
      message: 'Developer by Alquipo Neto'
    })
  }
}
