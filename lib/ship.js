const MovingObject = require('./moving_object.js');
const Bullet = require('./bullet.js');

class Ship extends MovingObject {
  constructor (pos, game, vel = [0, 0], radius = 25, color = "#3D5FD4") {
    super(pos, game, vel, radius, color);
  }

  relocate() {
    this.pos = this.game.randomPosition();
    this.vel = [0, 0];
  }

  power(impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  }

  fireBullet() {
    this.game.bullets.push(
      new Bullet(
        this.pos.slice(),
        this.game,
        this.calculateBulletVel(),
        this.radius / 4,
        "#FF0000"
    ));
  }

  calculateBulletVel () {
    let horizontalVel = this.vel[0];
    let verticalVel = this.vel[1];

    if (horizontalVel < 0) {
      horizontalVel *= 4;
    } else if (horizontalVel > 0) {
      horizontalVel *= 4;
    }

    if (verticalVel < 0) {
      verticalVel *= 4;
    } else if (verticalVel > 0) {
      verticalVel *= 4;
    }

    return [horizontalVel, verticalVel];
  }

}

module.exports = Ship;
