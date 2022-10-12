import dotenv from 'dotenv';
dotenv.config();

export const CONNECTION_URL =
  process.env.CONNECTION_URL || 'mongodb://localhost/testdb';
export const PORT = process.env.PORT || 5000;
