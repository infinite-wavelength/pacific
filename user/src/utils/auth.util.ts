import bcrypt from 'bcryptjs';

export default class AuthUtil{
    public static async hashPassword(password: string): Promise<string> {
        // TODO: generate salt and then hash password using salt
        return bcrypt.hash(password, 12);
    }

    public static async comparePassword(password: string, hashedPassword: string): Promise<boolean> {
        // TODO: generate salt and then hash password using salt
        return bcrypt.compare(password, hashedPassword);
    }
}