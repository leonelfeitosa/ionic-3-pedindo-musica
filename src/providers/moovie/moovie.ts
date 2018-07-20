import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '../../../node_modules/@Angular/http';
import { Observable } from '../../../node_modules/rxjs/Observable';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoovieProvider {
  private baseApiPath = "https://api.themoviedb.org/3";
  private key = "=506787c8e54ecbf862b9130cc5a4328f";

  constructor(public http: HttpClient) {
    console.log('Hello MoovieProvider Provider');
  }

  getLatestMovies() {
    return this.http.get(this.baseApiPath + "/movie/popular?api_key"+this.key);
  }

}
