ace.define("ace/snippets/lisp",[], function(require, exports, module) {
"use strict";

exports.snippetText = "";
exports.scope = "lisp";

});
                (function() {
                    ace.require(["ace/snippets/lisp"], function(m) {
                        if (typeof module == "object" && typeof exports == "object" && module) {
                            module.exports = m;
                        }
                    });
                })();
            