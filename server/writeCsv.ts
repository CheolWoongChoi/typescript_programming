import { writeCsvFormatFakeData } from './fake';
import { getFileNameAndNumber } from './utils/getFileNameAndNumber';

const number = process.argv.length === 3 ? process.argv[2] : 5;

console.log(process.argv);

const [filename, numberOfFakeData] = getFileNameAndNumber(
  './data/fake',
  Number(number)
);
const csvFilename = `${filename}-${numberOfFakeData}.csv`;

writeCsvFormatFakeData(csvFilename, numberOfFakeData)
  .then((result) => console.log(result))
  .catch((e: Error) => console.log(e.message));
