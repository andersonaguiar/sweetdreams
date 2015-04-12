var   path      = require('path')
    , Nightmare = require('nightmare')
    , should    = require('chai').should();

describe('Sweet Dreams with Mocha, Chai and Nightmare.js', function () {
  this.timeout(15000); // Set timeout to 15 seconds, instead of the original 2 seconds

  // set your url here
  var url = 'http://localhost:8888/workspace/GitHub/sweetdreams/app/';

  describe('Load page', function () {
    it('should show form when loaded', function (done) {
      new Nightmare()
        .goto(url)
        .evaluate(function () {
          return document.querySelectorAll('form').length;
        }, function (result) {
          result.should.equal(1);
          done();
        })
        .run();
    });
  });

  describe('Send form', function () {
    it('should print the posted string on submit', function (done) {
      var expected = 'Hello, world!';

      new Nightmare()
        .goto(url)
        .type('input[name="test"]', expected)
        .click('input[type="submit"]')
        .wait()
        .evaluate(function () {
          return document.querySelector('#result');
        }, function (element) {
          element.innerText.should.equal(expected);
          done();
        })
        .run();
    });

    it('should print empty on submit if no string were provided', function (done) {
      var expected = '';

      new Nightmare()
        .goto(url)
        .click('input[type="submit"]')
        .wait()
        .evaluate(function () {
          return document.querySelector('#result');
        }, function (element) {
          element.innerText.should.equal(expected);
          done();
        })
        .run();
    });
  });
});
