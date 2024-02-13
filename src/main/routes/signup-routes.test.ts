import request from 'supertest'
import app from '../config/app'
import { MongoHelper } from '../../infra/db/mongodb/helpers/mongo-helper'

describe('SignUp Routes', () => {
  beforeAll(async () => {
    /* eslint-disable @typescript-eslint/non-nullable-type-assertion-style */
    await MongoHelper.connect(process.env.MONGO_URL as string) 
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    const accountCollection = MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })
  
  test('Should return an account on sucess', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Rafael',
        email: 'rafael@rafael.com',
        password: '123',
        passwordConfirmation: '123'
      })
      .expect(200)
  })
})
