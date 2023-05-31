import * as request from 'supertest';
import { app } from '../server/server'; 

describe('Server', () => {
    it('should return a 200 OK status for GET /user', async () => {
      const response = await request(app).get('/user');
      expect(response.status).toBe(200);
    });
  
    it('should return a 200 OK status for POST /auth/login', async () => {
      const response = await request(app).post('/auth/login').send({
        username: 'testUser',
        password: 'testPass',
      });
      expect(response.status).toBe(200);
    });
  
    it('should return a 401 Unauthorized status for POST /auth/login with invalid credentials', async () => {
      const response = await request(app).post('/auth/login').send({
        username: 'invaliduser',
        password: 'invalidpassword',
      });
      expect(response.status).toBe(401);
    });
  });
  
  
  
  
  
  