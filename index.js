const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

function generateSVG(text, textColor, shape, shapeColor) {
    let svgShape;
    
    switch (shape) {
      case 'Circle':
        svgShape = new Circle();
        break;
      case 'Triangle':
        svgShape = new Triangle();
        break;
      case 'Square':
        svgShape = new Square();
        break;
    }
    svgShape.setColor(shapeColor);

    const svgContent = `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${svgShape.render()}
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
    `;
  
    fs.writeFileSync('logo.svg', svgContent.trim());
    console.log('Generated logo.svg');
  }
  