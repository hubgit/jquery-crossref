# jQuery CrossRef

[Demonstration](http://git.macropus.org/reference-resolver/)

## Methods

[CrossRef Metadata search](http://search.crossref.org/help/api)

    $.crossref.search(text, { rows: 5 });

Search with extra parameters:

    $.crossref.search(text, { sort: ‘year’, page: 2 });

Use [DOI Content Negotiation](http://www.crosscite.org/cn/) to fetch structured data for a DOI 

    $.crossref.fetch(doi, mimetype);
