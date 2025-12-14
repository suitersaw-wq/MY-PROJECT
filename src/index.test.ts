import request from 'supertest';
import { app, greet } from './index';

describe('greet', () => {
  it('should greet with the given name', () => {
    expect(greet('world')).toBe('Hello, world!');
    expect(greet('TypeScript')).toBe('Hello, TypeScript!');
  });
});

describe('API', () => {
  it('GET / should return greeting', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
    expect(res.text).toBe('Hello, World!');
  });

  it('GET /health should return ok status', async () => {
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: 'ok' });
  });

  it('GET /greet/:name should greet by name', async () => {
    const res = await request(app).get('/greet/Austin');
    expect(res.status).toBe(200);
    expect(res.text).toBe('Hello, Austin!');
  });

  it('POST /ai/chat should require message', async () => {
    const res = await request(app).post('/ai/chat').send({});
    expect(res.status).toBe(400);
    expect(res.body).toEqual({ error: 'message is required' });
  });
});
