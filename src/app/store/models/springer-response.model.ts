export interface SpringerResponseModel {
  apiMessage: string;
  query: string;
  apiKey:     string;
  result:     Result[];
  records:    Record[];
  facets:     Facet[];
}

export interface Facet {
  name:   string;
  values: Value[];
}

export interface Value {
  value: string;
  count: string;
}

export interface Record {
  contentType:     string;
  identifier:      string;
  url:             URL[];
  title:           string;
  creators:        Creator[];
  publicationName: string;
  openaccess:      string;
  doi:             string;
  publisher:       string;
  publicationDate: Date;
  publicationType: string;
  issn:            string;
  volume:          string;
  number:          string;
  genre:           string;
  startingPage:    string;
  endingPage:      string;
  journalId:       string;
  copyright:       string;
  abstract:        string;
}

export interface Creator {
  creator: string;
}

export interface URL {
  format:   string;
  platform: string;
  value:    string;
}

export interface Result {
  total:            string;
  start:            string;
  pageLength:       string;
  recordsDisplayed: string;
}
