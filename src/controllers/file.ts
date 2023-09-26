import { Request, Response } from 'express';
import { createFiles, findFiles } from '../services/file';
import { NewFiles } from '../types/NewFiles';

export const getFiles = async (req: Request, res: Response) => {
  const { fileId } = req.params;
  const file = await findFiles(Number(fileId));

  if (!file) {
    res.send(400);
    return;
  }

  res.setHeader('Content-Type', file.mimetype);
  res.setHeader('Content-Disposition', `inline; filename="${file.name}"`);
  res.end(file.data);
};

export const addFiles = async (req: Request, res: Response) => {
  const uploadedFiles = req.files;

  if (!uploadedFiles) {
    res.send({ photosLinks: [], docsLinks: [] });
    return;
  }

  try {
    const savedFiles = await Promise.all(
      Object.values(uploadedFiles).map(async (file) => {
        const result = await createFiles(file);
        return result;
      })
    );

    const photosLinks: NewFiles[] = [];
    const docsLinks: NewFiles[] = [];

    savedFiles.forEach(({ id, name, mimetype }) => {
      const link = `http://localhost:5000/files/${id}`;
      const file = { id, name, type: mimetype, link};

      if (mimetype === 'text/plain') {
        docsLinks.push(file);
        return;
      }

      photosLinks.push(file);
    });


    console.log(JSON.stringify(savedFiles));

    res.send({ photosLinks, docsLinks });
  } catch (error) {
    console.log('Error uploading files:', error);
    res.sendStatus(400);
  }
};
