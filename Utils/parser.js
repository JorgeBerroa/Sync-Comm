const Google = require("./google");

class Parser {

    static getGoogleCode(message) {

        return new Google().getCode(message);
    }
}

module.exports = Parser;
