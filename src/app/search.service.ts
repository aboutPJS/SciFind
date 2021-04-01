import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SearchResult} from './store/models/search-result.model';
import {Observable} from 'rxjs';
import {SpringerResponseModel} from './store/models/springer-response.model';
import {IeeeResponseModel} from './store/models/ieee-response.model';
import {ElsevierResultModel} from './store/models/elsevier-result.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private RESULTS_URL = 'http://localhost:3000/results';

  constructor(private http: HttpClient) {}

  getSearchResultsIeee(searchQuery: string): Observable<IeeeResponseModel> {
    return this.http.get<IeeeResponseModel>(
      'https://ieeexploreapi.ieee.org/api/v1/search/articles?querytext=' + searchQuery.replace(' ', '+') + '&format=json&apikey=53sdkeep5mazvnwbz95u8xny'
    );
  }

  getSearchResultsElsevier(searchQuery: string): Observable<ElsevierResultModel> {
    return this.http.get<ElsevierResultModel>(
      'https://api.elsevier.com/content/search/sciencedirect?query=gene&apiKey=7f59af901d2d86f78a1fd60c1bf9426a',
      //'https://api.elsevier.com/content/search/scopus?query=' + searchQuery.replace(' ', '+') + '&httpAccept=application/json&apiKey=7f59af901d2d86f78a1fd60c1bf9426a',
      {
        headers: new HttpHeaders().set('Access-Control-Allow-Origin', '*'),
      }
    );
  }

  getSearchResultsSpringer(searchQuery: string): Observable<SpringerResponseModel> {
    return this.http.get<SpringerResponseModel>(
      'https://api.springer.com/metadata/json?api_key=2e90cddf3c2bd63dda4887fbe9cb7d4d&q=' + searchQuery.replace(' ', '+') + '&s=1&p=30'
    );
  }
}
