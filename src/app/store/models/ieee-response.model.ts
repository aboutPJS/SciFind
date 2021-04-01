export interface IeeeResponseModel {
  total_records: number;
  total_searched: number;
  articles?: (ArticlesEntity)[] | null;
}
export interface ArticlesEntity {
  doi?: string | null;
  title: string;
  publisher: string;
  isbn?: string | null;
  rank: number;
  authors: Authors;
  access_type: string;
  content_type: string;
  abstract: string;
  article_number: string;
  pdf_url: string;
  html_url: string;
  abstract_url: string;
  publication_title: string;
  conference_location?: string | null;
  conference_dates?: string | null;
  publication_number: number;
  is_number: number;
  publication_year: number;
  publication_date: string;
  start_page: string;
  end_page: string;
  citing_paper_count: number;
  citing_patent_count: number;
  index_terms: IndexTerms;
  isbn_formats?: IsbnFormats | null;
  issue?: string | null;
  issn?: string | null;
  volume?: string | null;
  partnum?: string | null;
}
export interface Authors {
  authors?: (AuthorsEntity | null)[] | null;
}
export interface AuthorsEntity {
  affiliation?: string | null;
  authorUrl?: string | null;
  id?: number | null;
  full_name: string;
  author_order: number;
}
export interface IndexTerms {
  ieee_terms?: IeeeTermsOrAuthorTerms | null;
  author_terms?: IeeeTermsOrAuthorTerms1 | null;
}
export interface IeeeTermsOrAuthorTerms {
  terms?: (string)[] | null;
}
export interface IeeeTermsOrAuthorTerms1 {
  terms?: (string)[] | null;
}
export interface IsbnFormats {
  isbns?: (IsbnsEntity)[] | null;
}
export interface IsbnsEntity {
  format: string;
  value: string;
  isbnType: string;
}
