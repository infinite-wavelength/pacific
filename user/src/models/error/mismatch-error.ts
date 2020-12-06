import CommonError from './common-error';
import CustomError from './custom-error';
import ERRORS from '../../config/errors'

export default class MismatchError extends CustomError {
    statusCode = 401;
    entity: string;

    constructor(entity: string) {
        super(ERRORS.MISMATCH_ERROR.reason);
        Object.setPrototypeOf(this, MismatchError.prototype);
        this.entity = entity;
    }

    serializeErrors(): CommonError[] {
        return [new CommonError(ERRORS.MISMATCH_ERROR.reason, `${this.entity} ${ERRORS.MISMATCH_ERROR.description}`)];
    }
}