const Convert = require("./convert");
const _ = require("lodash");

class Google {

    getCode(message) {
        return this.isValidCodeMessage(message) ? this.extractCodes(message) : undefined;
    }

    isValidCodeMessage(message) {
        return message.toLowerCase().includes('your code is');
    };

    extractCodes(message) {
        let parsedMessage = message.toLowerCase().match(/your code is.*/gi)[0].split(/again/i);
        let codes = parsedMessage.map(message => {
            let impreciseCode = message.replace(/your code is|again|[^\w\s]/gi, "").trim();
            return new Convert().toNumbers(impreciseCode);
        });
        let validCodes = codes.filter(code => this.isValidCode(code));
        return _.uniq(validCodes);
    };

    isValidCode(code) {
        return code.length === 6 && /^\d+$/.test(code);
    }
}

module.exports = Google;
