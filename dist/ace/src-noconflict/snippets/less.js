ace.define("ace/snippets/less",[], function(require, exports, module) {
"use strict";

exports.snippetText = "";
exports.scope = "less";

});
                (function() {
                    ace.require(["ace/snippets/less"], function(m) {
                        if (typeof module == "object" && typeof exports == "object" && module) {
                            module.exports = m;
                        }
                    });
                })();
            