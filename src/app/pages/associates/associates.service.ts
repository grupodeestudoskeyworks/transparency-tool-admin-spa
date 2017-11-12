import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { BaseModel } from '../../@core/models/base-model';
import { Associate } from './associate';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AssociatesService {

  private associatesUrl = 'api/associates';

  constructor(private http: HttpClient) { }

  getAssociates(handleError: (error) => void) : Observable<Associate[]> {
    return this.http.get<Associate[]>(this.associatesUrl)
      .map(associates => associates.map(({ birthday, ...rest }) => {
        return { birthday: new Date(birthday), ...rest }
      }))
      .pipe(
        catchError(this.handleError<Associate>(handleError))
      )
  }

  private handleError<T extends BaseModel> (handleError: (error) => void, result: T[] = []) {
    return (error: any): Observable<T[]> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      handleError(this.getErrorMessage(error));
      
      console.info(result);

      // Let the app keep running by returning an empty result.
      return of(result);
    };
  }

  private getErrorMessage(error: any) : string {
    return (error as HttpErrorResponse).message;
  }
}