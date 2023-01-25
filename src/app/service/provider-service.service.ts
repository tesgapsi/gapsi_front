import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { environment } from '../../environments/environment'
import { catchError} from 'rxjs/operators';

import { Observable } from 'rxjs';
import { Provider } from '../models/provider.model';

@Injectable({
  providedIn: 'root'
})
export class ProviderServiceService {

  constructor(private http:HttpClient) { }

  getAllProvider(offset:any, max:any ){
  	return this.http.get<any>(`${environment.urlBack}api/providers?offset=0&max=10`).pipe(catchError(error => throwError(error)));
  }

  create(data: any): Observable<any> {
    return this.http.post(`${environment.urlBack}api/provider`, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${environment.urlBack}api/provider/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${environment.urlBack}api/provider/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${environment.urlBack}api/providers`);
  }
}
