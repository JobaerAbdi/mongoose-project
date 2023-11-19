import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { StudentRoutes } from './app/modules/student/student.routes'

const app: Application = express()

app.use(express.json())
app.use(cors())

//    api/v1/students     => get
//    api/v1/students/create-student  => post
app.use('/api/v1/students', StudentRoutes)

const getAController = (req: Request, res: Response) => {
  const a = 10
  res.send(a)
}

app.get('/', getAController)

export default app
