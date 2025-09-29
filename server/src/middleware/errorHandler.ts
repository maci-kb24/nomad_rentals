import { Request, Response, NextFunction } from "express";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error('an error occurred:!');
    console.log(err.message);
    res.status(500).json({ message: 'Something went wrong' });
};