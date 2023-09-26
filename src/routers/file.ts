import express from 'express';
import fileUpload from 'express-fileupload';
import { getFiles, addFiles } from '../controllers/file';

export const router = express.Router();

router.use(fileUpload());
router.get('/:fileId', getFiles);
router.post('/', addFiles);
