ace.define("ace/snippets/lucene",[], function(require, exports, module) {
"use strict";

exports.snippetText = "";
exports.scope = "lucene";

});
                (function() {
                    ace.require(["ace/snippets/lucene"], function(m) {
                        if (typeof module == "object" && typeof exports == "object" && module) {
                            module.exports = m;
                        }
                    });
                })();
            