class Convert {
    constructor() {
        this.numbers = {
            "zero": 0,
            "one": 1,
            "won": 1,
            "to": 2,
            "too": 2,
            "two": 2,
            "three": 3,
            "tree": 3,
            "four": 4,
            "for": 4,
            "five": 5,
            "six": 6,
            "seven": 7,
            "eight": 8,
            "ate": 8,
            "nine": 9
        };
    }

    toNumber(text) {
        return this.numbers[text] || "";
    }

    toNumbers(str) {
        return str.replace(/[a-zA-Z]+|\s/g, (match) => this.toNumber(match))
        .replace(/\s+/g, '');
    }
}

module.exports = Convert;
