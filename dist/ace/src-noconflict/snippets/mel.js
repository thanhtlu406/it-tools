ace.define("ace/snippets/mel",[], function(require, exports, module) {
"use strict";

exports.snippetText = "";
exports.scope = "mel";

});
                (function() {
                    ace.require(["ace/snippets/mel"], function(m) {
                        if (typeof module == "object" && typeof exports == "object" && module) {
                            module.exports = m;
                        }
                    });
                })();
            