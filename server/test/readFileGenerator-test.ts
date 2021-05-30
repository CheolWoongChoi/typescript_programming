import { readFileGenerator } from '../fileApi';

for (const value of readFileGenerator('data/fake-5.csv')) {
  console.log('<line>', value, '</line>');
  // break;
}
