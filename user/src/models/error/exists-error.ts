import CommonError from './common-error';
import CustomError from './custom-error';
import ERRORS from '../../config/errors'

export default class ExistsError extends CustomError {
    statusCode = 406;
    entity: string;

    constructor(entity: string) {
        super(ERRORS.EXISTS_ERROR.reason);
        Object.setPrototypeOf(this, ExistsError.prototype);
        this.entity = entity;
    }

    serializeErrors(): CommonError[] {
        return [new CommonError(ERRORS.EXISTS_ERROR.reason, `${this.entity} ${ERRORS.EXISTS_ERROR.description}`)];
    }
}