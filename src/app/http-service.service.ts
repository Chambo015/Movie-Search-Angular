import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpServiceService {
  token: string = 'aaa2d048';
  constructor(private http: HttpClient) {}

  getFilms(film: string, year: string) {
    if (year) {
      return this.http.get(
        `https://www.omdbapi.com/?s=${film}&y=${year}&apikey=${this.token}`
      );
    }
    return this.http.get(
      `https://www.omdbapi.com/?s=${film}&apikey=${this.token}`
    );
  }
  getShortInfo(id: string) {
    return this.http.get(`https://www.omdbapi.com/?i=${id}&apikey=${this.token}`);
  }
}
