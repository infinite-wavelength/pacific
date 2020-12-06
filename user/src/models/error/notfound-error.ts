import CommonError from './common-error';
import CustomError from './custom-error';
import ERRORS from '../../config/errors'

export default class NotFoundError extends CustomError {
    statusCode = 404;

    constructor() {
        super(ERRORS.NOT_FOUND.description);
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }

    serializeErrors(): CommonError[] {
        return [new CommonError(ERRORS.NOT_FOUND.reason, ERRORS.NOT_FOUND.description)];
    }
}