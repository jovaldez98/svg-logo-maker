const { Circle, Square, Triangle } = require('./shapes');


    test('Created a circle', () => {
        const shape = new Circle();
        shape.setColor('red');

        expect(shape.render()).toEqual(
            '<circle cx="160" cy="100" r="75" fill="red" />');
    });

    test('Created a square', () => {
        const shape = new Square();
        shape.setColor('blue');

        expect(shape.render()).toEqual(
            '<rect x="100" y="100" width="110" height="110" fill="blue" />');
    });

    test('Created a triangle', () => {
        const shape = new Triangle();
        shape.setColor('green');

        expect(shape.render()).toEqual(
            '<polygon points="150, 18, 244, 182, 56, 182" fill="green" />');
    });