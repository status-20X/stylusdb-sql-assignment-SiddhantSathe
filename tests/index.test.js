// test('Basic Jest Test', () => {
//     expect(1).toBe(1);
//   });

const readCSV = require('../src/csvReader');

test('Read CSV File', async () => {
    const data = await readCSV('sample.csv');
    expect(data.length).toBeGreaterThan(0);
    expect(data.length).toBe(3);
    expect(data[1].name).toBe('John');
    expect(data[1].age).toBe('30'); //ignore the string type here, we will fix this later
});