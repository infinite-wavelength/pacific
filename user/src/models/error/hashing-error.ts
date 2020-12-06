import CommonError from './common-error';
import CustomError from './custom-error';
import ERRORS from '../../config/errors'

export default class HashingError extends CustomError {
    statusCode = 500;

    constructor() {
        super(ERRORS.HASHING_ERROR.description);
        Object.setPrototypeOf(this, HashingError.prototype);
    }

    serializeErrors(): CommonError[] {
        return [new CommonError(ERRORS.HASHING_ERROR.reason, ERRORS.HASHING_ERROR.description)];
    }
}