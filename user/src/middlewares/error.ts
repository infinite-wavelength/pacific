import { Request, Response, NextFunction } from 'express';
import CustomError from '../models/error/custom-error';
import InternalServerError from '../models/error/internal-server-error';

const error = (error: Error, req: Request, res: Response, next: NextFunction) => {
    if (error instanceof CustomError) {
        return res.status(error.statusCode).json({errors :error.serializeErrors()});
    }
    const internalServerError = new InternalServerError();
    return res.status(internalServerError.statusCode).json({errors :internalServerError.serializeErrors()});
};

export default error;
