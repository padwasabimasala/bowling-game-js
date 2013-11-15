var chai = require('chai')
chai.should()

var BowlingGame = require ('../bowling_game').BowlingGame

describe('new BowlingGame()', function() {
  it('should create a new BolwingGame', function() {
    game = new BowlingGame
    game.should.be.a('Object')
  })
})
