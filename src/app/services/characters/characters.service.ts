import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  apiUrl = 'https://demo6086832.mockable.io/characters';

  constructor(
    private http: HttpClient
  ) { }

  getCharacters(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      map((response: Response) => response)
    );
  }

}
