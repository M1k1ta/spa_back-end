import { File } from './models/File';
import { Message } from './models/Message';
import { dbinit } from './utils/dbinit';

export const seedInitialData = async() => {
  await Message.bulkCreate([]);
  await File.bulkCreate([]);
};

const sync = async() => {
  dbinit();
  // { force: true }
  await Message.sync({ force: true });
  await File.sync({ force: true });

  await seedInitialData();
};

sync();
