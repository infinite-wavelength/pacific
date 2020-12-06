import CommonError from './common-error';
import CustomError from './custom-error';
import ERRORS from '../../config/errors'

export default class DatabaseError extends CustomError {
    statusCode = 500;

    constructor() {
        super(ERRORS.DB_CONNECTION.description);
        Object.setPrototypeOf(this, DatabaseError.prototype);
    }

    serializeErrors(): CommonError[] {
        const errors = [new CommonError(ERRORS.DB_CONNECTION.reason, ERRORS.DB_CONNECTION.description)];
        return errors;
    }
}