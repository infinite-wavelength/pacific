import { RequestHandler } from 'express';
import NotFoundError from '../models/error/notfound-error';

export const noRoute: RequestHandler = (req, res, next) => {
    throw new NotFoundError();
};
