const inquirer = require('inquirer');
const fs = require('fs');
const SVG = require('./svg');

//Inquirer prompt
class CLI {
  run() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter three letters to create a logo',
            name: 'logoLetters',
        },
         {
            type: 'input',
            message: 'Enter a color for the text',
            name: 'colorOfText',
         },
         {
            type: 'list',
            message: 'Select a shape for the logo',
            choices: ['Circle', 'Square', 'Triangle'],
            name: 'shapeOfLogo',
         },
         {
            type: 'input',
            message: 'Enter a color for the shape',
            name: 'colorForShape',
         }
    ])
    
    .then(({ logoLetters, colorOfText, shapeOfLogo, colorForShape }) => {
        let shape;
        switch (shapeOfLogo) {
            case 'Circle':
                shape = new Circle();
                break;

                case 'Square':
                    shape = new Square();
                    break;

                    case 'Triangle':
                        shape = new Triangle();
                        break;
        }

        shape.setColor(colorForShape);
        const newSVG = new SVG();
        newSVG.setShape(shape);
        newSVG.setText(logoLetters, colorOfText);

        const svgCode = newSVG.render(newSVG);

        fs.writeFile('logo.svg', svgCode, (err) => {
            if (err) {
                throw err;
            }
            console.log('Logo created!');
        });
    });
  }
}


//Export the CLI class
module.exports = CLI;