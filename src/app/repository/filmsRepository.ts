import axios from 'axios';
import { Injectable } from '@angular/core';
import { ɵassignExtraOptionsToRouter } from '@angular/router';
import { AxiosInstance } from 'axios';

@Injectable({
  providedIn: 'root',
})
export class FilmsRepository {
  async getData() {
    try {
      var axiosResponse = axios
        .get('https://localhost:7232/api/films')
        .then((result) => {
          console.log('getData:', result.data.results);
          return result;
        });
    } catch (error) {
      console.log('error');
    }
  }
}
