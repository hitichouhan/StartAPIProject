import { Component, OnInit } from '@angular/core';

import axios from 'axios';
import { Observable } from 'rxjs';
import { FilmService } from 'src/app/services/films-services';

// interface Ifilms {
//   title: string;
//   episode_id: number;
//   opening_crawl: string;
//   director: string;
//   producer: string;
//   release_date: string;
// }
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  data: any;
  filmsResult = [];
  fetchUri = 'https://localhost:7232/api/films';

  constructor(private service: FilmService) {
    this.data = [];
    this.loadFilms();
  }
  ngOnInit() {
    //   this.filmsRepo.getData();
    //   console.log('data is here: ');
  }
  loadFilms() {
    const result = this.service.getFilms();
    result.subscribe((response) => {
      console.log(response);
      this.data = response;
    });
  }
}
