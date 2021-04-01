import {Action} from '@ngrx/store';
import {SearchResult} from '../models/search-result.model';
import {SpringerResponseModel} from '../models/springer-response.model';
import {IeeeResponseModel} from '../models/ieee-response.model';
import {ElsevierResultModel} from '../models/elsevier-result.model';

export enum SearchActionTypes {
  LOAD_SEARCH_IEEE = '[SEARCH] Load Search with IEEE',
  LOAD_SEARCH_SPRINGER = '[SEARCH] Load Search with Springer',
  LOAD_SEARCH_ELSEVIER = '[SEARCH] Load Search with Elsevier',
  //
  LOAD_SEARCH_SPRINGER_SUCCESS = '[SEARCH] Load Springer Search',
  LOAD_SEARCH_IEEE_SUCCESS = '[SEARCH] Load IEEE Search',
  LOAD_SEARCH_ELSEVIER_SUCCESS = '[SEARCH] Load Elsevier Search',
  //
  LOAD_SEARCH_FAILURE = '[SEARCH] Load Shopping Search',
}

export class LoadSearchIeeeAction implements Action {
  readonly type = SearchActionTypes.LOAD_SEARCH_IEEE;
  constructor(public searchQuery: string) {}
}
export class LoadSearchSpringerAction implements Action {
  readonly type = SearchActionTypes.LOAD_SEARCH_SPRINGER;
  constructor(public searchQuery: string) {}
}
export class LoadSearchElsevierAction implements Action {
  readonly type = SearchActionTypes.LOAD_SEARCH_ELSEVIER;
  constructor(public searchQuery: string) {}
}


export class LoadSearchIeeeSuccessAction implements Action {
  readonly type = SearchActionTypes.LOAD_SEARCH_IEEE_SUCCESS;
  constructor(public payload: IeeeResponseModel) {}
}
export class LoadSearchSpringerSuccessAction implements Action {
  readonly type = SearchActionTypes.LOAD_SEARCH_SPRINGER_SUCCESS;
  constructor(public payload: SpringerResponseModel) {}
}
export class LoadSearchElsevierSuccessAction implements Action {
  readonly type = SearchActionTypes.LOAD_SEARCH_ELSEVIER_SUCCESS;
  constructor(public payload: ElsevierResultModel) {}
}


export class LoadSearchFailureAction implements Action {
  readonly type = SearchActionTypes.LOAD_SEARCH_FAILURE;
  constructor(public payload: Error) {}
}


export type SearchAction =
  LoadSearchIeeeAction |
  LoadSearchSpringerAction |
  LoadSearchElsevierAction |
  LoadSearchFailureAction |
  LoadSearchIeeeSuccessAction |
  LoadSearchElsevierSuccessAction |
  LoadSearchSpringerSuccessAction;
