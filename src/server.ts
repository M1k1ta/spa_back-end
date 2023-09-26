import express from 'express';
import cors from 'cors';

import { dbinit } from './utils/dbinit';
import { router as messageRouter } from './routers/message';
import { router as fileRouter } from './routers/file';

const PORT = process.env.PORT || 5000;
const server = express();

dbinit();

server.use(cors());
server.use(express.json());
server.use('/messages', messageRouter);
server.use('/files', fileRouter);

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/`);
});
