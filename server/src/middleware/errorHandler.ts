import { Request, Response, NextFunction } from "express";

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    console.log(err.message);
    res.status(500).json({ message: 'Something went wrong' });
};