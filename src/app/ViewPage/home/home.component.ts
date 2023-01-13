import { Component, OnInit } from '@angular/core';

import axios from 'axios';
import { Observable } from 'rxjs';
import { FilmsRepository } from 'src/app/repository/filmsRepository';

interface Ifilms {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
}

const result = {};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  data: any;

  fetchUri = 'https://localhost:7232/api/films';

  constructor(private filmsRepo: FilmsRepository) {}

  ngOnInit() {
    this.filmsRepo.getData();
    console.log('data is here: ');
  }
}
