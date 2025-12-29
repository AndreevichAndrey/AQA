import dotenv from 'dotenv';

// Load environment variables from .env (if present)
dotenv.config();

export const validUser = {
    email: process.env.VALID_USER_EMAIL ?? '',
    password: process.env.VALID_USER_PASSWORD ?? ''
};

export const invalidUser = {
    email: process.env.INVALID_USER_EMAIL ?? '',
    password: process.env.INVALID_USER_PASSWORD ?? ''
};
