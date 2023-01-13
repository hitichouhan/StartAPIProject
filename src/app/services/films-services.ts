import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  http: HttpClient;
  url = 'https://localhost:7232/api/films';

  constructor(http: HttpClient) {
    this.http = http;
  }
  getFilms() {
    const result = this.http.get(this.url);
    return result;
  }
}
