/*
 * jQuery CrossRef v0.1
 * https://github.com/hubgit/jquery-crossref
 *
 * Copyright 2014 Alf Eaton
 * Released under the MIT license
 * http://git.macropus.org/mit-license/
 *
 * Date: 2014-01-19
 */
 (function($) {
    $.crossref = {
        search: function(query, params) {
            var data = $.extend({ q: query }, params);

            return $.getJSON('http://search.crossref.org/dois', data);
        },

        fetch: function(doi, format) {
            doi = doi.replace(/^http:\/\/dx\.doi\.org/, '');

            return $.ajax({
                url: 'http://data.crossref.org/' + doi,
                headers: { 'Accept': format }
            });
        }
    };
})(jQuery);