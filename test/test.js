/* eslint-disable no-undef */
const supertest = require('supertest');
const app = require('../src/app');
const connection = require('../src/database/connection');
const { dbBuild } = require('../src/database/build');
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

// test end points
describe('test endpoint', () => {
  test('test for (/) endpoint', (done) => {
    supertest(app).get('/')
      .expect('Content-Type', 'text/html; charset=UTF-8')
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });
  // eslint-disable-next-line no-undef
  test('test the next endpoint -> (/patients)', (done) => {
    supertest(app)
      .get('/patients')
      .expect('Content-Type', 'text/html; charset=UTF-8')
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });
  // eslint-disable-next-line no-undef
  test('test the not found error', (done) => {
    supertest(app)
      .get('/ghjgjh')
      .expect(404)
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });
});
