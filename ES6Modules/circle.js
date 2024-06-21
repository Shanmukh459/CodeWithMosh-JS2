const _radius = new WeakMap()

export class Circle {
  constructor(radius) {
    _radius.set(this, radius)
  }

  draw() {
    console.log("This is a circle with radius", _radius.get(this))
  }
}