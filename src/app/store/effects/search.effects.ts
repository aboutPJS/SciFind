import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {
  LoadSearchElsevierAction,
  LoadSearchElsevierSuccessAction,
  LoadSearchFailureAction,
  LoadSearchIeeeAction,
  LoadSearchIeeeSuccessAction,
  LoadSearchSpringerAction,
  LoadSearchSpringerSuccessAction,
  SearchActionTypes
} from '../actions/search.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {SearchService} from '../../search.service';


@Injectable()
export class SearchEffects{

  @Effect() loadSearchIeee$ = this.actions$
    .pipe(
      ofType<LoadSearchIeeeAction>(SearchActionTypes.LOAD_SEARCH_IEEE),
      mergeMap(
        (payload) => this.searchService.getSearchResultsIeee(payload.searchQuery)
          .pipe(
            map(data => {
              return new LoadSearchIeeeSuccessAction(data);
            }),
            catchError(error => of(new LoadSearchFailureAction(error)))
          )
      ),
    );

  @Effect() loadSearchElsevier$ = this.actions$
    .pipe(
      ofType<LoadSearchElsevierAction>(SearchActionTypes.LOAD_SEARCH_ELSEVIER),
      mergeMap(
        (payload) => this.searchService.getSearchResultsElsevier(payload.searchQuery)
          .pipe(
            map(data => {
              return new LoadSearchElsevierSuccessAction(data);
            }),
            catchError(error => of(new LoadSearchFailureAction(error)))
          )
      ),
    );

  @Effect() loadSearchSpringer$ = this.actions$
    .pipe(
      ofType<LoadSearchSpringerAction>(SearchActionTypes.LOAD_SEARCH_SPRINGER),
      mergeMap(
        (payload) => this.searchService.getSearchResultsSpringer(payload.searchQuery)
          .pipe(
            map(data => {
              return new LoadSearchSpringerSuccessAction(data);
            }),
            catchError(error => of(new LoadSearchFailureAction(error)))
          )
      ),
    );

  constructor(
    private actions$: Actions,
    private searchService: SearchService
  ) { }
}
