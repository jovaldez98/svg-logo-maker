const { Circle, Square, Triangle } = require('../lib/shapes');

describe ('Circle', () => {
    test('Created a circle', () => {
        const newCircle = new Circle();
        shape.setColor('red');

        expect(newCircle.render()).toEqual(
            '<circle cx="160" cy="100" r="75" fill="red" />');
    });
});

describe ('Square', () => {
    test('Created a square', () => {
        const newSquare = new Square();
        shape.setColor('blue');

        expect(newSquare.render()).toEqual(
            '<rect x="100" y="100" width="110" height="110" fill="blue" />');
    });
});

