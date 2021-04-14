import {SearchResult} from '../models/search-result.model';
import {SearchAction, SearchActionTypes} from '../actions/search.actions';
import {Creator, SpringerResponseModel} from '../models/springer-response.model';
import {AuthorsEntity, IeeeResponseModel} from '../models/ieee-response.model';
import {Author, ElsevierResultModel} from '../models/elsevier-result.model';

export interface SearchState {
  list: SearchResult[];
  loading: boolean;
  error: Error;
}

const initialState: SearchState = {
  list: [],
  loading: false,
  error: undefined
};

const emptyResult: SearchResult = {
  author: '⚠️',
  title: 'Nothing Found',
  date: '',
  publisher: '',
  link: '⚠️ not given',
  abstract: 'The data provider did not find results matching your search query. Try searching with a different one.'
}


export function SearchReducer(state: SearchState = initialState, action: SearchAction): any {
  switch (action.type) {
    // Loading
    case SearchActionTypes.LOAD_SEARCH_IEEE:
      return {
        ...state,
        loading: true
      };
    case SearchActionTypes.LOAD_SEARCH_SPRINGER:
      return {
        ...state,
        loading: true
      };
    case SearchActionTypes.LOAD_SEARCH_ELSEVIER:
      return {
        ...state,
        loading: true
      };

// Success
    case SearchActionTypes.LOAD_SEARCH_SPRINGER_SUCCESS:
      return {
        ...state,
        error: undefined,
        loading: false,
        list: transformSpringerPayload(action.payload)
      };
    case SearchActionTypes.LOAD_SEARCH_IEEE_SUCCESS:
      return {
        ...state,
        error: undefined,
        list: transformIeeePayload(action.payload),
        loading: false
      };
    case SearchActionTypes.LOAD_SEARCH_ELSEVIER_SUCCESS:
      return {
        ...state,
        error: undefined,
        list: transformElsevierPayload(action.payload),
        loading: false
      };

// Failure
    case SearchActionTypes.LOAD_SEARCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
}

function transformSpringerPayload(payload: SpringerResponseModel): SearchResult[]{
  const searchResults: SearchResult[] = [];
  if (payload.result[0].total === '0'){
    searchResults.push(emptyResult);
  } else {
    payload.records?.forEach( (record) => {
      const result: SearchResult = {
        author: transformToString(record.creators) ? transformToString(record.creators) : '⚠️ not given',
        title: record.title ? record.title : '⚠️ not given',
        date: record.publicationDate ? record.publicationDate.toString() : '⚠️ not given',
        publisher: record.publisher ?  record.publisher : '⚠️ not given',
        link: record.url[0].value ? record.url[0].value : '⚠️ not given',
        abstract: record.abstract ? record.abstract : '⚠️ not given'
      };
      searchResults.push(result);
    });
  }

  return searchResults;
}

function transformIeeePayload(payload: IeeeResponseModel): SearchResult[] {
  const searchResults: SearchResult[] = [];
  if (payload.total_records !== 0){
    payload.articles?.forEach( (article) => {
      const result: SearchResult = {
        author: transformToStringIeee(article.authors.authors) ? transformToStringIeee(article.authors.authors) : '⚠️ not given',
        title: article.title ? article.title : '⚠️ not given',
        date: article.publication_date ? article.publication_date : '⚠️ not given',
        publisher: article.publisher ?  article.publisher : '⚠️ not given',
        link: article.html_url ? article.html_url : '⚠️ not given',
        abstract: article.abstract ? article.abstract : '⚠️ not given'
      };
      searchResults.push(result);
    });
  } else {
    searchResults.push(emptyResult);
  }
  return searchResults;
}

function transformElsevierPayload(payload: ElsevierResultModel): SearchResult[] {
  const searchResults: SearchResult[] = [];
  if (payload['search-results'].entry[0].link){
    payload['search-results']?.entry.forEach( (entry) => {
      const result: SearchResult = {
        author: entry['dc:creator'] ? entry['dc:creator'] : '⚠️ not given',
        title: entry['dc:title'] ? entry['dc:title']  : '⚠️ not given',
        date: entry['prism:coverDate'] ? entry['prism:coverDate'] : '⚠️ not given',
        publisher: 'Elsevier',
        link: entry.link.filter(link => link['@ref'] === 'scopus')[0]['@href'] ? entry.link.filter(link => link['@ref'] === 'scopus')[0]['@href'] : '⚠️ not given',
        abstract: entry['dc:description'] ? entry['dc:description'] : '⚠️ not given'
      };
      searchResults.push(result);
    });
  } else {
    searchResults.push(emptyResult);
  }
  return searchResults;
}

function transformToString(authors: Creator[]): string{
  let authorsString = '';
  authors.forEach(author => authorsString = authorsString.concat(author.creator, '; '));
  return authorsString.slice(0, -2);
}

function transformToStringIeee(authors: AuthorsEntity[]): string{
  let authorsString = '';
  authors.forEach(author => authorsString = authorsString.concat(author.full_name, '; '));
  return authorsString.slice(0, -2);
}

