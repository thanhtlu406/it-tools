ace.define("ace/snippets/gcode",[], function(require, exports, module) {
"use strict";

exports.snippetText = "";
exports.scope = "gcode";

});
                (function() {
                    ace.require(["ace/snippets/gcode"], function(m) {
                        if (typeof module == "object" && typeof exports == "object" && module) {
                            module.exports = m;
                        }
                    });
                })();
            