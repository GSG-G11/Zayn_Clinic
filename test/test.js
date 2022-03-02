/* eslint-disable no-undef */
const connection = require('../src/database/connection');
// eslint-disable-next-line no-unused-vars
const { dbBuild } = require('../src/database/build');
// eslint-disable-next-line no-unused-vars
const { getAllData, postAllData } = require('../src/controller/dynamic');

test('jest is working', () => {
  expect(1).toBe(1);
});

beforeEach(() => dbBuild());
afterAll(() => connection.end());

test('get user function', () => {
  const expected = {
    patient_id: 1, patient_name: 'abdulrahman', age: '22', booking_date: '2022-03-01',
  };
  getAllData()
    .then((data) => {
      expect(data.rows[0].name).toBe(expected.name);
    });
});

test('post user function', () => {
  const name = 'Monther';
  const age = 22;
  const data = '2022-03-01';
  return postAllData(name, age, data)
    .then((da) => {
      expect(da.rows[1].name).toBe(name);
      expect(da.rows[1].age).toBe(age);
      expect(da.rows[1].data).toBe(data);
    });
});
