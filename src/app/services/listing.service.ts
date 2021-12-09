import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ArrayListing } from '../core/Models/arrayListing';
import { ListingModel } from '../core/Models/listingModel';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListingService {

  basePath: string = "http://localhost/api-true-omni/listing";

  constructor(private httpClient: HttpClient) { }

  public getListing(){
    console.log("Trying getting data");
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.httpClient.get<Array<ListingModel>>(this.basePath, httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('A connection error might be ocurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(
      'Something went wrong; please try again later.');
  }
}
