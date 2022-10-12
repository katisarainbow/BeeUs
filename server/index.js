import express from 'express';
import mongoose from 'mongoose';
import { CONNECTION_URL, PORT } from './config.js';

import postsRoutes from './routes/postsRoutes.js';

const app = express();

app.use(express.json());

app.use(postsRoutes);

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((error) => console.log(error.message));
