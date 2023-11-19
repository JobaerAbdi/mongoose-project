import { Request, Response } from 'express'
import { StudentServices } from './student.service'
import Joi from 'joi',

const createStudent = async (req: Request, res: Response) => {
  try {
    // creating a schema validation using joi



    const { student: studentData } = req.body
    const result = await StudentServices.createStudentToDB(studentData)

    res.status(200).json({
      success: true,
      messages: 'Student is created successfully',
      data: result,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      messages: 'Something went wrong',
      error: error,
    })
  }
}

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentFromDB()

    res.status(200).json({
      success: true,
      messages: 'Students are  retrieved successfully',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params
    const result = await StudentServices.getSingleStudentFromDB(studentId)

    res.status(200).json({
      success: true,
      messages: 'Single student retrieved successfully',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}

export const StudentController = {
  createStudent,
  getAllStudents,
  getSingleStudent,
}
