import { connect } from '../mongodb/connect';

const makeCollectionsTest = async () => {
  let connection;

  try {
    connection = await connect();
    const db = await connection.db('ch12-2');
    const personCollection = db.collection('persons');
    const addressCollection = db.collection('addresses');

    console.log(personCollection, addressCollection);
  } catch (e) {
    console.log(e.message);
  } finally {
    connection.close();
  }
};

makeCollectionsTest();
