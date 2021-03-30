import {SearchResult} from '../models/search-result.model';
import {SearchAction, SearchActionTypes} from '../actions/search.actions';
import {Creator, SpringerResponseModel} from '../models/springer-response.model';

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
        list: action.payload,
        loading: false
      };
    case SearchActionTypes.LOAD_SEARCH_ELSEVIER_SUCCESS:
      return {
        ...state,
        error: undefined,
        list: action.payload,
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
  payload.records.forEach( (record) => {
    const result: SearchResult = {
      author: transformToString(record.creators),
      title: record.title,
      date: record.publicationDate.toString(),
      publisher: record.publisher,
      link: record.url[0].value,
      abstract: record.abstract
    };
    searchResults.push(result);
  });
  return searchResults;
}

function transformToString(authors: Creator[]): string{
  let authorsString = '';
  authors.forEach(author => authorsString = authorsString.concat(author.creator, '; '));
  return authorsString.slice(0, -2);
}
