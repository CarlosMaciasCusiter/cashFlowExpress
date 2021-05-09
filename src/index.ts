import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { billsRouter } from './bills/bills.router';

dotenv.config();

if (!process.env.PORT) {
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/api/bills", billsRouter)

app.listen(PORT, () => {
    console.log(`Listening of port ${PORT}`)
})