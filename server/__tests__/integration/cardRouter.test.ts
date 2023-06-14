import request from 'supertest';

import app from '../../server';
import UserModel from '../../models/UserModel';
import GrowModel from '../../models/GrowModel';

describe('Card Integration Tests', () => {
  let user: any = '';
  let card: any = '';

  beforeAll(async () => {
    user = await UserModel.create({
      email: 'test@test.com',
      password: 'test',
    });
  });

  afterAll(async () => {
    app.close();
    await UserModel.findByIdAndDelete(user._id);
  });

  it('should add card to database', async () => {
    user = await UserModel.create({
      email: 'test@test.com',
      password: 'test',
    });

    const response = await request(app).post('/card/new').send({
      created_by: user._id,
      mushroom_type: 'test',
      container: 'test',
      substrate: 'test',
      inoculation_method: 'test',
    });
    card = response.body;
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('_id');
    expect(response.body).toHaveProperty('created_by');
    expect(response.body).toHaveProperty('mushroom_type');
    expect(response.body).toHaveProperty('container');
    expect(response.body).toHaveProperty('substrate');
    expect(response.body).toHaveProperty('inoculation_method');
  });

  it('should update card in database', async () => {
    const response = await request(app).post('/card/update').send({
      id: card._id,
      mushroom_type: 'mushroom',
    });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('card');
    expect(response.body.card.mushroom_type).not.toEqual(card.mushroom_type);
  });

  it('should delete card from database', async () => {
    const response = await request(app)
      .post('/card/delete')
      .send({ id: card._id });
    expect(response.status).toBe(200);
    const look_up = await GrowModel.findById(card._id);
    expect(look_up).toBeFalsy();
  });
});
