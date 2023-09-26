import express from 'express';
import { getMessages, addMessage } from '../controllers/message';

export const router = express.Router();

router.get('/', getMessages);
router.post('/', addMessage);
