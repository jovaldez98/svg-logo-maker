class SVG {
    constructor() {
        this.shape = '';
        this.text = '';
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${this.shape}
        ${this.text}
        </svg>`;
    }

    setText(logoLetters, colorOfText) {
        if (this.text.length > 3) {
            throw new Error('Only three letters are allowed!');
        }
        this.text = `<text x="150" y="125" text-anchor="middle" fill="${colorOfText}" font-size="60">${logoLetters}</text>`;
    }

    setShape(shape) {
        this.shape = shape.render();
    }
}

//Export SVG 
module.exports = SVG;