ace.define("ace/snippets/mushcode",[], function(require, exports, module) {
"use strict";

exports.snippetText = "";
exports.scope = "mushcode";

});
                (function() {
                    ace.require(["ace/snippets/mushcode"], function(m) {
                        if (typeof module == "object" && typeof exports == "object" && module) {
                            module.exports = m;
                        }
                    });
                })();
            