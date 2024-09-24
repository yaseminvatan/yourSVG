// Importing the Circle, Triangle, and Square classes from shape.js
const { Circle, Triangle, Square } = require('./shape.js');

// Test case for rendering a Circle
test('Circle renders correctly', () => {
    // Create a new Circle instance
    const shape = new Circle();
    
    // Set the color of the circle to 'green'
    shape.setColor('green');
    
    // Check if the rendered SVG matches the expected output for a green circle
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green" />');
});

// Test case for rendering a Triangle
test('Triangle renders correctly', () => {
    // Create a new Triangle instance
    const shape = new Triangle();
    
    // Set the color of the triangle to 'blue'
    shape.setColor('blue');
    
    // Check if the rendered SVG matches the expected output for a blue triangle
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});

// Test case for rendering a Square
test('Square renders correctly', () => {
    // Create a new Square instance
    const shape = new Square();
    
    // Set the color of the square to 'red'
    shape.setColor('red');
    
    // Check if the rendered SVG matches the expected output for a red square
    expect(shape.render()).toEqual('<rect x="75" y="50" width="150" height="150" fill="red" />');
});
