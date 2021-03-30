import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {SearchReducer} from './store/reducers/search.reducer';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {HttpClientModule} from '@angular/common/http';
import {EffectsModule} from '@ngrx/effects';
import {SearchEffects} from './store/effects/search.effects';
import { SearchOutputComponent } from './search-output/search-output.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SearchInputComponent } from './search-input/search-input.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchOutputComponent,
    FooterComponent,
    HeaderComponent,
    SearchInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({search: SearchReducer}),
    EffectsModule.forRoot([SearchEffects]),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
