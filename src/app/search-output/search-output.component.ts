import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {SearchResult} from '../store/models/search-result.model';
import {AppState} from '../store/models/app.state.model';

@Component({
  selector: 'app-search-output',
  templateUrl: './search-output.component.html',
  styleUrls: ['./search-output.component.scss']
})

export class SearchOutputComponent implements OnInit{
  searchResult$: Observable<SearchResult[]>;
  loading$: Observable<boolean>;
  error$: Observable<Error>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.searchResult$ = this.store.select(store => store.search.list);
    this.loading$ = this.store.select(store => store.search.loading);
    this.error$ = this.store.select(store => store.search.error);
  }
}
