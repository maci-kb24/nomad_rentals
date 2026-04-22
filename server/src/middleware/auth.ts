
import { Request, Response, NextFunction } from 'express';

declare global {
    namespace Express {
        interface Request {
            user?: { id: string; email: string };
        }
    }
}

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    if (process.env.NODE_ENV === 'development' && process.env.SKIP_AUTH === 'true') {
        req.user = { id: 'dev-user-id', email: 'dev@test.com' };
        return next();
    }
    // your real JWT code stays here, untouched
};

