//const chai = require('chai')
var request = require('supertest')
var expect = require('chai').expect
var myURL = 'https://xvx1r2bsub.execute-api.us-east-1.amazonaws.com/dev/hello'

describe('Hello', function() {

    const container = request(myURL);
    it('This is a hello world test', function(done) {
        container
            .get(``)
            .expect(`{"message":"hello world!"}`)
            .end(function(err, res) {
                if(err) return done(err);
                expect(err).to.be.null;
                expect(res.statusCode).to.equal(200);
                expect(res.body.message).to.be.equal(`hello world!`);
                done();
            });
    });
});

// const chai = require('chai')
// const chaiHttp = require('chai-http')
// const express = require('express')

// const expect = chai.expect

// chai.use(chaiHttp)


// const helloWolrd = require('../../hello-world/handler')

// const createFakeServer = () => {
//     const app = express()
//     const apiPort = 30001
//     const result = {
//         message: `Hello, the current time is ${new Date().toTimeString()}`,
//     }
//     app.get('/', (req, res) => {
//         res.send(result)
//     })

//     app.listen(apiPort)

//     return app
// }
    

// describe('Hello', () => {
// 	describe('GET /', () => {
//       let fakeServer

//       beforeEach(() => {
//           fakeServer = createFakeServer()
//       }) 
//         it('This a hello world test', (done) => {
//         chai.request(fakeServer)
//             .get("/")
//             .end((err, res) => {
//                 expect(res).to.have.status(200)
//                 //expect(helloWolrd.hello).to.equal(res.body.message)
//                 done()
//             })
//         })
//     })
// })