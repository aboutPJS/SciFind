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
  private baseURL= 'https://scifind.herokuapp.com/';

  constructor(private http: HttpClient) {}

  getSearchResultsIeee(searchQuery: string): Observable<IeeeResponseModel> {
    return this.http.get<IeeeResponseModel>(
      this.baseURL +
      'ieee' +
      '/articles?querytext=' +
      searchQuery.replace(' ', '+') +
      '&format=json'
      //'http://localhost:3000/ieee/articles?querytext=' + searchQuery.replace(' ', '+') + '&format=json'
      //'https://cors-anywhere.herokuapp.com/http://ieeexploreapi.ieee.org/api/v1/search/articles?querytext=' + searchQuery.replace(' ', '+') + '&format=json&apikey=53sdkeep5mazvnwbz95u8xny'
    );
  }

  getSearchResultsElsevier(searchQuery: string): Observable<ElsevierResultModel> {
    return this.http.get<ElsevierResultModel>(
      this.baseURL +
      'elsevier' +
      '/scopus?query=' +
      searchQuery.replace(' ', '+')
      //'http://localhost:3000/elsevier/scopus?query=' + searchQuery.replace(' ', '+') + '&view:complete'
      //'https://cors-anywhere.herokuapp.com/https://api.elsevier.com/content/search/scopus?query=' +
      //searchQuery.replace(' ', '+') +
      //'&view:complete' +
      //'&apiKey=e40692ae5d5b41d32316bb88765a2da5'
    );
  }

  getSearchResultsSpringer(searchQuery: string): Observable<SpringerResponseModel> {
    return this.http.get<SpringerResponseModel>(
      this.baseURL +
      'springer' +
      '/json?q=' +
      searchQuery.replace(' ', '+') +
      '&s=1&p=30'
      //'http://localhost:3000/springer/json?q=' + searchQuery.replace(' ', '+') + '&s=1&p=30'
      //'https://api.springer.com/metadata/json?api_key=2e90cddf3c2bd63dda4887fbe9cb7d4d&q=' + searchQuery.replace(' ', '+') + '&s=1&p=30'
    );
  }
}
