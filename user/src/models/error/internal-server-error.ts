import CommonError from './common-error';
import CustomError from './custom-error';
import ERRORS from '../../config/errors'

export default class InternalServerError extends CustomError {
    statusCode = 500;

    constructor() {
        super(ERRORS.NOT_FOUND.description);
        Object.setPrototypeOf(this, InternalServerError.prototype);
    }

    serializeErrors(): CommonError[] {
        return [new CommonError(ERRORS.SERVER.reason, ERRORS.SERVER.description)];
    }
}