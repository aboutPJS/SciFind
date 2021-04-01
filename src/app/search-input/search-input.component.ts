import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../store/models/app.state.model';
import {LoadSearchElsevierAction, LoadSearchIeeeAction, LoadSearchSpringerAction} from '../store/actions/search.actions';


@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})

export class SearchInputComponent {
  searchForm = new FormGroup({
    searchQuery: new FormControl('',[Validators.required]),
  });

  constructor(private store: Store<AppState>) {}

  onSearchIeee(): void{
    this.store.dispatch(new LoadSearchIeeeAction(this.searchForm.get('searchQuery').value));
  }

  onSearchSpringer(): void{
    this.store.dispatch(new LoadSearchSpringerAction(this.searchForm.get('searchQuery').value));
  }

  onSearchElsevier(): void{
    this.store.dispatch(new LoadSearchElsevierAction(this.searchForm.get('searchQuery').value));
  }
}
