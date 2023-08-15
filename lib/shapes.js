class Shape {
    constructor() {
        this.shapeColor = '';
    }
    setColor(shapeColor) {
        this.shapeColor = shapeColor;
    }
}

class Circle extends Shape {
        render() {
            return `<circle cx="160" cy="100" r="75" fill="${this.shapeColor}" />`;
        }
    }
    class Square extends Shape {
        render() {
            return `<rect x="100" y="100" width="110" height="110" fill="${this.shapeColor}" />`;
        }
    }

    class Triangle extends Shape {
        render() {
            return `<polygon points="150, 18, 244, 182, 56, 182" fill="${this.shapeColor}" />`;
        }
    }


    module.exports = {
        Circle,
        Square,
        Triangle,
    };