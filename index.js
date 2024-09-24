// Importing necessary modules
const inquirer = require('inquirer'); // Inquirer is used to prompt the user for input
const fs = require('fs'); // fs (File System) is used to write the SVG file to the file system
const { Circle, Triangle, Square } = require('./lib/shape'); // Importing shape classes (Circle, Triangle, Square) from the shape module

// Function to generate the SVG file based on user input
function generateSVG(text, textColor, shape, shapeColor) {
    let svgShape;
    
    // Determine the shape type based on user input
    switch (shape) {
      case 'Circle':
        svgShape = new Circle(); // Create a new Circle object
        break;
      case 'Triangle':
        svgShape = new Triangle(); // Create a new Triangle object
        break;
      case 'Square':
        svgShape = new Square(); // Create a new Square object
        break;
    }

    // Set the color for the chosen shape
    svgShape.setColor(shapeColor);

    // Generate the SVG content with the selected shape, text, and colors
    const svgContent = `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${svgShape.render()} <!-- Render the selected shape -->
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text> <!-- Add the user-input text with the specified color -->
    </svg>
    `;
  
    // Write the generated SVG content to a file named 'logo.svg'
    fs.writeFileSync('logo.svg', svgContent.trim()); // Writes the SVG content to a file and removes any extra spaces
    console.log('Generated logo.svg'); // Logs a message indicating the file was created successfully
}

// Prompt the user for inputs using Inquirer
inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter text for the logo (up to 3 characters):',
      validate: input => input.length <= 3 || 'Text must be 3 characters or less.', // Validates that the text input is 3 characters or fewer
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (keyword or color code):', // Prompts for the text color (can be a keyword or color code)
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['Circle', 'Triangle', 'Square'], // Provides a list of shapes to choose from
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (keyword or hexadecimal):', // Prompts for the shape color (can be a keyword or hexadecimal color code)
    },
  ])
  .then(answers => {
    // Destructures the answers object into separate variables
    const { text, textColor, shape, shapeColor } = answers;

    // Call the function to generate the SVG file with the user's input
    generateSVG(text, textColor, shape, shapeColor);
  });
