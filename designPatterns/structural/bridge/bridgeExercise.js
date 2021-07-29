class Shape {
  constructor(name, render) {
    this.name = name;
    this.renderer = render
  }

  toString() {
      this.renderer.toString(this.name);
  }
}

class Triangle extends Shape {
  constructor() {
    super('triangle');
  }
}

class Square extends Shape {
  constructor() {
    super('square');
  }
}

class VectorSquare extends Square {
  toString() {
    return `Drawing square as lines`;
  }
}

class RasterSquare extends Square {
  toString() {
    return `Drawing square as pixels`;
  }
}

class VectorRender {
    get whatToRendersAs() {

    }
}


// imagine VectorTriangle and RasterTriangle are here too






















class Shape
{
    constructor(name, renderer)
    {
        this.renderer = renderer;
        this.name = name;
    }

    toString() {
        return this.renderer.toString(this.name);
    }
}


class Triangle extends Shape {
    constructor(renderer){
        super('triangle', renderer);
    }
}

class Square extends Shape {
    constructor(renderer){
        super('square', renderer);
    }
}

class VectorRenderer {

    toString(name) {
        return `Drawing ${name} as lines`;
    }
}
class RasterRenderer {

    toString(name) {
        return `Drawing ${name} as pixels`;
    }
}