class Rectangle{
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  area() {
    return this.width * this.height;
  }

  paint() {
    console.log(`Painting with ${this.color}`);
  }
}

const rect = new Rectangle(4, 5, "blue");
const area = rect.area();
console.log(area);
rect.paint();

const map = new Map();
map.set('name', 'rashi');

map.set('age', 19);
console.log(map.get('name'));