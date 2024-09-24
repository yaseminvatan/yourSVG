// Base Shape class that defines a shape's color
class Shape {
  constructor() {
    this.color = ''; // Initializes the color property for the shape
  }

  // Method to set the color of the shape
  setColor(color) {
    this.color = color; // Assigns the provided color to the shape's color property
  }
}

// Circle class that extends Shape and renders a circle
class Circle extends Shape {
  // Method to render the circle as an SVG element
  render() {
    // Returns an SVG circle element with its center (cx, cy), radius (r), and fill color
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}

// Triangle class that extends Shape and renders a triangle
class Triangle extends Shape {
  // Method to render the triangle as an SVG element
  render() {
    // Returns an SVG polygon element representing a triangle, with specified points and fill color
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

// Square class that extends Shape and renders a square
class Square extends Shape {
  // Method to render the square as an SVG element
  render() {
    // Returns an SVG rect element representing a square with its top-left corner (x, y), width, height, and fill color
    return `<rect x="75" y="50" width="150" height="150" fill="${this.color}" />`;
  }
}

// Exporting Circle, Triangle, and Square classes so they can be used in other files
module.exports = { Circle, Triangle, Square };
