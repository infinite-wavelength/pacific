import CommonError from './common-error';
import CustomError from './custom-error';
import ERRORS from '../../config/errors'

export default class CreateError extends CustomError {
    statusCode = 500;
    entity: string;

    constructor(entity: string) {
        super(ERRORS.CREATION_ERROR.description);
        Object.setPrototypeOf(this, CreateError.prototype);
        this.entity = entity;
    }

    serializeErrors(): CommonError[] {
        return [new CommonError(ERRORS.CREATION_ERROR.reason, `${ERRORS.CREATION_ERROR.description} ${this.entity}`)];
    }
}