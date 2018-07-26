var unicode = require('./language_unicode.json');
var bigram = require('./bigram');

var CJK_REGEX = getRegExp();

/**
 * @param input
 * @param type
 * @returns {Array}
 */
function getCJKTokens(input, type) {

    let cjkToken = [];

    if (input && input.length > 0) {

        var match;

        while ((match = CJK_REGEX.exec(input)) != null) {
            let cjk = match[0];
            if (cjk && cjk.length > 2) {
                cjkToken = cjkToken.concat(bigram(cjk, type));
            }
        }

        return cjkToken;

    } else {
        return cjkToken;
    }
}

/**
 * @returns {RegExp}
 */
function getRegExp() {
    var unicodeChar = [];
    for (var i in unicode) {
        if (unicode.hasOwnProperty(i)) {
            var minCode = `\\u${unicode[i].minUnicode}`;
            var maxCode = `-\\u${unicode[i].maxUnicode}`;
            unicodeChar.push(`${minCode}${maxCode}`);
        }
    }

    // This RegExp contains all the unicode listed in language_unicode.json file
    return new RegExp('[' + unicodeChar + ']+', 'gmi');
}

module.exports = getCJKTokens;
