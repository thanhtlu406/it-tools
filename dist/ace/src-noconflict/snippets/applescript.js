ace.define("ace/snippets/applescript",[], function(require, exports, module) {
"use strict";

exports.snippetText = "";
exports.scope = "applescript";

});
                (function() {
                    ace.require(["ace/snippets/applescript"], function(m) {
                        if (typeof module == "object" && typeof exports == "object" && module) {
                            module.exports = m;
                        }
                    });
                })();
            