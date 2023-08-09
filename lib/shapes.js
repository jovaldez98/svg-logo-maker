class Shape {
    constructor() {
        this.colorForShape = '';
    }
    setColor(colorForShape) {
        this.colorForShape = colorForShape;
    }
}

class Circle extends Shape {
        render() {
            return `<circle cx="160" cy="100" r="75" fill="${this.colorForShape}" />`;
        }
    }
    class Square extends Shape {
        render() {
            return `<rect x="100" y="100" width="110" height="110" fill="${this.colorForShape}" />`;
        }
    }

    class Triangle extends Shape {
        render() {
            return `<polygon points="150, 18, 224, 182, 56, 182" fill="${this.colorForShape}" />`;
        }
    }


    module.exports = {
        Circle,
        Square,
        Triangle,
    };