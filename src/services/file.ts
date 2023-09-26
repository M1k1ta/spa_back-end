import { UploadedFile } from 'express-fileupload';
import { File } from '../models/File';

export const findFiles = async (id: number) => {
  return await File.findByPk(id);
};

export const createFiles = async (data: UploadedFile | UploadedFile[]) => {
  return await File.create({ ...data });
};
