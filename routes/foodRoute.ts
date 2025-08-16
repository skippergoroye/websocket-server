import express, { Router } from "express"
import { createFood } from "../controller/foodController"



const router= express.Router()


router.post('/createfood', createFood)



export default router