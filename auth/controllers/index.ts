import { Request, Response } from 'express';

export const login = (req: Request, res: Response) => {
    res.json({ message: 'success', data: null });
};

export const signup = (req: Request, res: Response) => {
    res.json({ message: 'success', data: null });
};

export const logout = (req: Request, res: Response) => {
    res.json({ message: 'success', data: null });
};
