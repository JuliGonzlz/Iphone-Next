import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iphone } from './iphone-list/Iphone';
const URL = 'https://6872de27c75558e27352e229.mockapi.io/iphone/iphone';
@Injectable({
  providedIn: 'root'
})
export class IphoneDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Iphone[]> {
    return this.http.get<Iphone[]>(URL);
  }
}
