ace.define("ace/snippets/fortran",[], function(require, exports, module) {
"use strict";

exports.snippetText = "";
exports.scope = "fortran";

});
                (function() {
                    ace.require(["ace/snippets/fortran"], function(m) {
                        if (typeof module == "object" && typeof exports == "object" && module) {
                            module.exports = m;
                        }
                    });
                })();
            