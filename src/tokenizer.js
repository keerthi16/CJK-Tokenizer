var getCJKTokens = require('./languageIdentifier');

let cjk = getCJKTokens(token, TYPE_MESSAGE);
if (cjk && cjk.length) {
    for (i in cjk) {
        if (cjk.hasOwnProperty(i)) {
            ret.push(cjk[ i ]);
        }
    }
}
