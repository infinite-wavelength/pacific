import { RequestHandler } from 'express';
import config from 'config';
import jwt from 'jsonwebtoken';

import User from '../models/dao/user.model';
import CreateError from '../models/error/create-error';
import ExistsError from '../models/error/exists-error';
import NotExistsError from '../models/error/not-exists-error';
import { AuthenticationError } from '../models/error/auth-error';
import MismatchError from '../models/error/mismatch-error';
import CommonError from '../models/error/common-error';

import AuthUtil from '../utils/auth.util';
import MESSAGES from '../config/messages';
import ERRORS from '../config/errors';

//TODO: peform user input sanity with npm package
//TODO: peform user input validations like isEmail, isPasswordLength
//TODO: peform query params, body params, etc validation

export const login: RequestHandler = async (req, res, next) => {
    try {
        const { email, password }: { email: string, password: string } = req.body;
        let user: User | null = await User.findOne({ where: { email: email } });
        if (user) {
            let isPasswordCorrect: boolean = await AuthUtil.comparePassword(password, user.password);
            if (isPasswordCorrect) {
                const payload: any = { firstName: user.firstName, lastName: user.lastName, email: user.email, roleId: user.roleId };
                const token: string = jwt.sign(payload, config.get('jwtSecretKey'));
                return res.status(201).json({ message: `${MESSAGES.LOGIN_SUCCESS}`, data: {...payload, token: token} });
            }
            return next(new AuthenticationError());
        }
        return next(new NotExistsError('User'))
    } catch (error) {
        next(error);
    }
};

/**
 * If user exists, it will throw error else user will be created with default password ${firstName}.${lastName}
 */
export const signup: RequestHandler = async (req, res, next) => {
    try {
        const { firstName, lastName, email, password, confirmPassword }: { firstName: string, lastName: string, email: string, password: string, confirmPassword: string } = req.body;
        if (password !== confirmPassword) {
            return next(new MismatchError('Password'));
        }
        let user: User | null = await User.findOne({ where: { email: email } });
        if (!user) {
            const hashedPassword: string = await AuthUtil.hashPassword(password);
            user = await User.create({ firstName, lastName, email, password: hashedPassword, roleId: 1, isDeleted: false, isActivated: true });

            // TODO: remove password from returning into response
            return res.status(201).json({ message: `${MESSAGES.USER_CREATED}`, data: user });
        }
        return next(new ExistsError('User'))
    } catch (error) {
        next(new CreateError('User'));
    }
};

export const logout: RequestHandler = (req, res, next) => {
    res.json({ message: 'success', data: null });
};

export const deleteUser: RequestHandler = (req, res, next) => {
    res.json({ message: 'success', data: null });
};

export const updatePassword: RequestHandler = (req, res, next) => {
    res.json({ message: 'success', data: null });
};

export const deactivateUser: RequestHandler = (req, res, next) => {
    res.json({ message: 'success', data: null });
};

export const updateRole: RequestHandler = (req, res, next) => {
    res.json({ message: 'success', data: null });
};
