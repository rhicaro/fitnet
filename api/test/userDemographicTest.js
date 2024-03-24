const request = require('supertest');
const app = require('../app');

describe('GET /api/userdemographics', () => {
  it('responds with JSON containing user demographics', async () => {
    const response = await request(app).get('/api/userdemographics');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  it('handles errors from the database', async () => {
    // Mocking the database connection to force an error
    jest.spyOn(require('../db'), 'query').mockImplementation((query, callback) => {
      callback(new Error('Database error'), null);
    });

    const response = await request(app).get('/api/userdemographics');
    expect(response.status).toBe(500);
  });
});
