import { ValidationError } from 'express-validator';
import CommonError from './common-error';
import CustomError from './custom-error';
import ERRORS from '../../config/errors'

export default class RequestValidationError extends CustomError {
    statusCode = 400;
    private errors: ValidationError[];

    constructor(errors: ValidationError[]) {
        super(ERRORS.REQUEST_VALIDATION_ERROR.description);
        Object.setPrototypeOf(this, RequestValidationError.prototype);
        this.errors = errors;
    }

    serializeErrors(): CommonError[] {
        const errors = this.errors.map((error) => {
            return new CommonError(ERRORS.REQUEST_VALIDATION_ERROR.reason, error.msg);
        });
        return errors;
    }
}