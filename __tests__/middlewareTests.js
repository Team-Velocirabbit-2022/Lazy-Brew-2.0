const fs = require('fs');
const path = require('path');
const controller = require('./server/controllers/hotelController.js');

// this test suite is unit testing the middleware functions from hotelController

// jest.mock('request');

// controller 1
hotelController.getAllHotels = (req, res, next) => {
  Hotel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }

  })
}

describe('getAllHotels unit test', () => {
  it('returns an error when the find method results in an error', () => {

  });

  it('returns the json result of the find method', () => {

  });

  it('is able to access the db', () => {

  });

});

// controller 2
hotelController.postHotel = async (req, res, next) => {
  console.log(req.body)
  try {
    Hotel.create({
      nameOfHotel: req.body.nameOfHotel,
      action: req.body.action
    })
    return next();
  } catch (err) {
    return next(
      createErr({
        method: 'getAllusers',
        type: 'db query error',
        err,
      })
    );
  }
};

describe('postHotel unit test', () => {
  it('is able to access the db', () => {

  });

  it('creates a new instance / document in Hotel', () => {

  });

  it('new Hotel doc has only the two specified properties', () => {

  });

  it('throws an error - invokes global error handler if create method results in error', () => {

  });

});