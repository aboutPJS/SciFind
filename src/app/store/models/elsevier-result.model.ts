export interface ElsevierResultModel {
  'search-results': Searchresults;
}

interface Searchresults {
  'opensearch:totalResults': string;
  'opensearch:startIndex': string;
  'opensearch:itemsPerPage': string;
  'opensearch:Query': OpensearchQuery;
  link: Link[];
  entry: Entry[];
}

interface Entry {
  '@_fa': string;
  link: Link2[];
  'prism:url': string;
  'dc:identifier': string;
  'dc:title': string;
  'dc:creator': string;
  'prism:publicationName': string;
  'prism:issn': string;
  'prism:eIssn'?: string;
  'prism:volume': string;
  'prism:pageRange': string;
  'prism:coverDate': string;
  'prism:coverDisplayDate': string;
  'prism:doi'?: string;
  'dc:description': string;
  'citedby-count': string;
  affiliation: Affiliation[];
  'prism:aggregationType': string;
  subtype: string;
  subtypeDescription: string;
  author: Author[];
  authkeywords?: string;
  'prism:issueIdentifier'?: string;
}

export interface Author {
  '@_fa': string;
  'author-url': string;
  authid: string;
  authname: string;
  surname: string;
  initials: string;
  afid?: Namevariant[];
  'given-name'?: string;
}

interface Affiliation {
  '@_fa': string;
  'affiliation-url': string;
  afid: string;
  affilname: string;
  'affiliation-city': string;
  'affiliation-country': string;
  'name-variant': Namevariant[];
}

interface Namevariant {
  '@_fa': string;
  '$': string;
}

interface Link2 {
  '@_fa': string;
  '@ref': string;
  '@href': string;
}

interface Link {
  '@_fa': string;
  '@ref': string;
  '@href': string;
  '@type': string;
}

interface OpensearchQuery {
  '@role': string;
  '@searchTerms': string;
  '@startPage': string;
}
