import { Request, Response, NextFunction } from 'express';




export const createFood = async(req: Request, res: Response, next: NextFunction) => {
    try {
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            Error: "Internal server Error",
            route: "/food/createFood",
        });  
    }
}






