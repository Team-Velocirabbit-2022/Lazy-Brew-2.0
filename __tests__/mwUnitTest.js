const fs = require('fs');
const path = require('path');
const hotelController = require('../server/controllers/hotelController.js');
const { MongoClient }  = require('mongodb');

// this test suite is unit testing the middleware functions from hotelController

// jest.mock('request');

// GET controller tests
// describe('getAllHotels unit test', () => {
// });

// POST controller
describe('postHotel unit test', () => {
  let connection;
  let db;

  const MONGO_URI = 'mongodb+srv://Nigerian:Nigerian@cluster0.ma90j.mongodb.net/?retryWrites=true&w=majority';
  const dbName = 'hotels';

  beforeAll(async () => {
    connection = await MongoClient.connect(globalThis.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = await connection.db(globalThis.dbName);
  });
  
  afterAll(async () => {
    await connection.close()
  });

  it('should insert new doc into collection', async () => {
    const hotels = db.collection('hotels');

    const mockHotel = {nameOfHotel: 'mumbooo jumbo hotel', action: 'exclude'};
    await hotels.insertOne(mockHotel);

    const insertedHotel = await hotels.findOne({nameOfHotel: 'mumbooo jumbo hotel'});
    expect(insertedHotel).toEqual(mockHotel);
  });
});