import User from '../models/dao/user.model';
import ERRORS from '../config/errors';

const syncMigrations = async () => {
    try {
        await User.sync({ force: true });
    } catch (error) {
        console.log(ERRORS.MODEL_SYNC_ERROR.reason, ':' ,ERRORS.MODEL_SYNC_ERROR.description);
        process.exit(1);
    }
};

export default syncMigrations;
