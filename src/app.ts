import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

import * as middlewares from './middlewares';
import api from './api';

require('dotenv').config();

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(express.json());



app.use('/api/', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
