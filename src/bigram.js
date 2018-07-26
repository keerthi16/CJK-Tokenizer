'use strict';

const nGram = 2;
var TYPE_MESSAGE = 'msg';

module.exports = function biGram(value) {

    let n = nGram;

    let biGram = [];
    let index;

    if (!value) {
        return biGram
    }

    value = String(value);
    index = value.length - n + 1;

    if (index < 1) {
        return biGram;
    }

    while (index--) {
        biGram[index] = {token: value.substr(index, n), type: TYPE_MESSAGE}
    }

    return biGram;
};
