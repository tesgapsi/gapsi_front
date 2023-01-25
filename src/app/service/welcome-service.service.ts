import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { environment } from '../../environments/environment'
import { catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class WelcomeServiceService {

   

  constructor(private http:HttpClient) { }

  welcome(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'text/plain, */*',
        'Content-Type': 'application/json' // We send JSON
      }),
      responseType: 'text' as 'json'  // We accept plain text as response.
    };
  	return this.http.get<any>(`${environment.urlBack}info/welcome`, httpOptions).pipe(catchError(error => throwError(error)));
  }

  infoSystem(){
  	return this.http.get<Info>(`${environment.urlBack}info`).pipe(catchError(error => throwError(error)));
  }
}

export interface Info {
  titl: string;
  version: string;
  description: string;
}
