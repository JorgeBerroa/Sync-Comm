const Parser = require('../Utils/parser');

const greeting = "Thank you for using Google phone verification. Remember you should not share this cold with anyone" +
    " else and no one from Google will ever ask for this code.";

test('parses google code from message', () => {
    const message = greeting + " Your code is one 86219. Again, your code is one 86219.";
    const codes = Parser.getGoogleCode(message);
    expect(codes.length).toEqual(1);
    expect(codes[0]).toEqual("186219");
});

test('parses google code from message with numbers as all text', () => {
    const message = greeting + " Your code is one eight six two one nine. Again, your code is one eight six two one nine.";
    const codes = Parser.getGoogleCode(message);
    expect(codes.length).toEqual(1);
    expect(codes[0]).toEqual("186219");
});

test('parses google code from message with some numbers as text', () => {
    const message = greeting + " Your code is one 456 six 8. Again, your code is one 456 six 8.";
    const codes = Parser.getGoogleCode(message);
    expect(codes.length).toEqual(1);
    expect(codes[0]).toEqual("145668");
});

test('parses google code with different codes', () => {
    const message = greeting + " Your code is 21835 to again, your code is 201-8352";
    const codes = Parser.getGoogleCode(message);
    expect(codes.length).toEqual(1);
    expect(codes[0]).toEqual("218352");
});

test('parses google code with different codes', () => {
    const message = greeting + " Your code is 5125689 again, your code is 201-8352";
    const codes = Parser.getGoogleCode(message);
    expect(codes.length).toEqual(1);
    expect(codes[0]).toEqual("218352");
});

