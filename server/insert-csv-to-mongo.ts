import { connect } from './mongodb/connect';
import { getFileNameAndNumber } from './utils';
import { csvFileReaderGenerator } from './csv/csvFileReaderGenerator';

const insertCsvToMongo = async (
  csvFilename: string,
  collectionName: string,
  index = 1
) => {
  let connection;

  try {
    connection = await connect();
    const db = await connection.db('ch12-2');
    const collection = db.collection(collectionName);

    await collection.deleteMany({});
    await collection.createIndex({ birthday: -1, name: index });

    let line = 1;
    for (const object of csvFileReaderGenerator(csvFilename)) {
      await collection.insertOne(object);
      console.log(`${line++} inserted.`);
    }

    console.log('\n insertion complete.');
  } catch (e) {
    console.log(e.message);
  } finally {
    connection.close();
  }
};

const [filename] = getFileNameAndNumber('./data/fake-100000.csv', 1);
insertCsvToMongo(filename, 'users', 1);
