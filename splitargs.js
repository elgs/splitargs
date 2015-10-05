/**
 * Created by elgs on 7/2/14.
 */

(function () {
    "use strict";

    module.exports = function (input, separator, keepQuotes) {
        separator = separator || /\s/g;
        var singleQuoteOpen = false;
        var doubleQuoteOpen = false;
        var tokenBuffer = [];
        var ret = [];

        var arr = input.split('');
        for (var i = 0; i < arr.length; ++i) {
            var element = arr[i];
            var matches = element.match(separator);
            if (element === "'" && !doubleQuoteOpen) {
                if (keepQuotes === true) {
                    tokenBuffer.push(element);
                }
                singleQuoteOpen = !singleQuoteOpen;
                continue;
            } else if (element === '"' && !singleQuoteOpen) {
                if (keepQuotes === true) {
                    tokenBuffer.push(element);
                }
                doubleQuoteOpen = !doubleQuoteOpen;
                continue;
            }

            if (!singleQuoteOpen && !doubleQuoteOpen && matches) {
                if (tokenBuffer && tokenBuffer.length > 0) {
                    ret.push(tokenBuffer.join(''));
                    tokenBuffer = [];
                } else {
                    ret.push('');
                }
            } else {
                tokenBuffer.push(element);
            }
        }
        if (tokenBuffer && tokenBuffer.length > 0) {
            ret.push(tokenBuffer.join(''));
        } else {
            ret.push('');
        }
        return ret;
    };
})();