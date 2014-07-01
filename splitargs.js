/**
 * Created by elgs on 7/2/14.
 */

(function () {
    "use strict";

    module.exports = function (input, separator) {

        var config = {
            singleQuoteOpen: false,
            doubleQuoteOpen: false,
            separator: separator || /\s+/g
        };

        input.split('').map(function (element) {

        }, config);
    };
})();