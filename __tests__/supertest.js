// const { Exception } = require('sass');
const request = require('supertest');
const server = 'http://localhost:3000';

// this integration test suite is testing the back end server / routing functionality

// parent describe
describe('Route integration', () => {

  // describe for base endpoint
  describe('/', () => {
    describe('GET', () => {
      it('responds with 200 status and text/html content type', () => request(server)
        .get('/')
        .expect('Content-Type', /text\/html/)
        .expect(200));

      // it('responds to invalid request with 400 status and error in response body', () => request(server)
      //   .get('/')
      //   // .send('this should cause an error')
      //   .then(data => {
      //     expect(data.status).toEqual(400);
      //   }));
    });
  })
  
  // describe for /api endpoint
  describe('/api', () => {
    // GET request tests
    describe('GET', () => {
      it('responds with 200 status and application/json content type', () => request(server)
        .get('/api')
        .expect('Content-Type', /application\/json/)
        .expect(200));

  
      // get route in api is super whack - how to even test that? not even invoking next
    })

    // POST request tests
    describe('POST', () => {
      it('responds to invalid request with 400 status and error property', () => request(server)
          .post('/api')
          .send({test:'ijp'})
          .then(data => {
            expect(data.status).toEqual(400);
            console.log(data.body);
            expect(data.body).toHaveProperty('err');
          })
      );

      it('responds with status 200 and json content type', () => request(server)
        .post('/api')
        .send(
          { nameOfHotel: 'mumbo jumbo hotel', action: 'exclude' }
      )
        .expect('Content-Type', /application\/json/)
        .expect(200));

      it('creates the db instance / doc and returns success message', () => request(server)
        .post('/api')
        .send(
          { nameOfHotel: 'mumboo jumbo hotel1', action: 'exclude' }
        )
        .then(data => {
          expect(data.body).toHaveProperty('message');
        }));
    
    });
  });

  // describe for wildcard endpoint
  describe('/wildcard', () => {
    describe('GET', () => {
      it('responds with 404 status for wildcard endpoint', () => request(server) 
      .get('/wildcard')
      .expect(404));
    })
  });
});
        
// /build
// /api

// /wildcard test

// / GET