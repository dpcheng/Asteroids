const Game = require('./game.js');

class GameView {
  constructor(game, ctx) {
    this.game = game;
    this.ctx = ctx;
  }

  start() {
    this.bindKeyHandlers();
    console.log ("I'm at the start!");
    const elem = document.getElementById("game-canvas");
    const ctx = elem.getContext("2d");
    window.setInterval(() => {
      this.game.step();
      this.game.draw(ctx);
      if (this.game.asteroids.length === 0) {
        window.clearInterval( () => this.victoryCallback());
      }
    }, 15);
  }

  victoryCallback () {
    alert("Victory!");
  }

  bindKeyHandlers() {
    const ship = this.game.ship;

    key("w", () => ship.power([0, -1]));
    key("s", () => ship.power([0, 1]));
    key("a", () => ship.power([-1, 0]));
    key("d", () => ship.power([1, 0]));


    key("space", () => {
      if (!(ship.vel[0] === 0 && ship.vel[1] === 0)) {
        ship.fireBullet();
      }
    });
  }

}

module.exports = GameView;
