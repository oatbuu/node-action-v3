const assert = require('assert')
const request =require('supertest')
const app =require('../index')
const app2 =require('../item')

describe('Validate setting the test', () => {
    it('should be ok', () => {
        assert.ok(true)
    })
})

describe('GET "/"', () => {
    it('respond with Hello!'), (done) => {
        request(app).get('/').expect('Hello!',done)
    }
})

describe('GET "/item"', () => {
    it('respond with Hello!'), (done) => {
        request(app2).get('/').expect('Hello!',done)
    }
})