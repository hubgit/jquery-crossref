# jQuery CrossRef

[Demonstration](http://git.macropus.org/reference-resolver/).

## Methods

    $.crossref.search(text, { rows: 5 }); // [CrossRef Metadata search](http://search.crossref.org/help/api)

    $.crossref.search(text, { sort: ‘year’, page: 2 }); / / extra parameters

    $.crossref.fetch(doi, mimetype); // use [DOI Content Negotiation](http://www.crosscite.org/cn/) to fetch structured data for a DOI 