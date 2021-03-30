import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SearchResult} from './store/models/search-result.model';
import {Observable} from 'rxjs';
import {SpringerResponseModel} from './store/models/springer-response.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private RESULTS_URL = 'http://localhost:3000/results';

  constructor(private http: HttpClient) {}

  getSearchResultsIeee(searchQuery: string): Observable<SearchResult[]> {
    return this.http.get<SearchResult[]>(
      'https://ieeexploreapi.ieee.org/api/v1/search/articles?querytext=' + searchQuery + '&format=json&apikey=53sdkeep5mazvnwbz95u8xny'
    );
  }

  getSearchResultsElsevier(searchQuery: string): Observable<SearchResult[]> {
    return this.http.get<SearchResult[]>(this.RESULTS_URL);
  }

  getSearchResultsSpringer(searchQuery: string): Observable<SpringerResponseModel> {
    return this.http.get<SpringerResponseModel>(
      'https://api.springer.com/metadata/json?api_key=2e90cddf3c2bd63dda4887fbe9cb7d4d&q=' + searchQuery.replace(' ', '+') + '&s=1&p=30'
    );
  }
}
