import express from 'express';
import petImages from './petImages';
const router = express.Router();

export const myrouter = () => {
    petImages(router)
    return router;
}

