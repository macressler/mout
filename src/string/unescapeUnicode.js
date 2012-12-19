define(function () {

    /**
     * Unescape unicode char sequences
     * @version 0.1.0 (2012/12/19)
     */
    function unescapeUnicode(str){
        if (!str) return '';
        return str.replace(/\\u[0-9a-f]{4}/g, function(ch){
            var code = parseInt(ch.slice(2), 16);
            return String.fromCharCode(code);
        });
    }

    return unescapeUnicode;

});
