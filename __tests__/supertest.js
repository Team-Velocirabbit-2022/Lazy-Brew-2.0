// const { Exception } = require('sass');
const request = require('supertest');
const server = 'http://localhost:3000';

// this test suite is testing the back end server / routing functionality

// parent describe
describe('Route integration', () => {

  // describe for base endpoint
  describe('/', () => {
    describe('GET', () => {
      it('responds with 200 status and text/html content type', () => request(server)
        .get('/')
        .expect('Content-Type', /text\/html/)
        .expect(200));
    });
  })
  
  // describe for /api endpoint
  describe('/api', () => {
    describe('GET', () => {
      it('responds with 200 status and application/json content type', () => request(server)
        .get('/api')
        .expect('Content-Type', /application\/json/)
        .expect(200));

      // get route in api is super whack - how to even test that? not even invoking next
    })

    describe('POST', () => {
      it('responds with status 200 and json content type', () => request(server)
        .post('/api')
        .send(
          { nameOfHotel: 'mumbo jumbo hotel', action: 'exclude' }
      )
        .expect('Content-Type', /application\/json/)
        .expect(200));

      // it('sends the request body', () => request(server)
      //   // .post('/api')
      //   // .send([{request}])
      //   // .expect(200)
      // );

      // it('responds with the db info', () => request(server)
      
      // );
      
      // it('responds to invalid request with 400 status and error message in body', () => request(server)
      
      // );
    
    });
  });
});

// /build
// /api


// / GET