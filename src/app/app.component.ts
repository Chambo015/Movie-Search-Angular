import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Search, getSearchFilms } from './films';
import { HttpServiceService } from './http-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private httpService: HttpServiceService) {}

  searchResult?: Observable<Array<getSearchFilms>> | any;

  mapFilmInfo = new Map();

  openModal: boolean = false;
  idFilm: string = '';

  ngOnInit(): void {
     this.searchResult =  [
      {
        Title: 'The Lord of the Rings: The Fellowship of the Ring',
        Year: '2001',
        imdbID: 'tt0120737',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
      },
      {
        Title: 'The Lord of the Rings: The Return of the King',
        Year: '2003',
        imdbID: 'tt0167260',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
      },
      {
        Title: 'The Lord of the Rings: The Two Towers',
        Year: '2002',
        imdbID: 'tt0167261',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
      },
      {
        Title: 'Lord of War',
        Year: '2005',
        imdbID: 'tt0399295',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
      },
      {
        Title: 'The Lord of the Rings',
        Year: '1978',
        imdbID: 'tt0077869',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
      },
      {
        Title: 'Lord of the Flies',
        Year: '1990',
        imdbID: 'tt0100054',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BMDczN2I3NzItNjdlMS00YmNhLTkyODQtZGI1YWQ0NmViMTgwXkEyXkFqcGdeQXVyNjMwMjk0MTQ@._V1_SX300.jpg',
      },
      {
        Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
        Year: '1984',
        imdbID: 'tt0087365',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BM2NmYjZjOGItYTQ0ZC00YjcyLTk3MWUtYzdmZjY1MGNkMDViXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg',
      },
      {
        Title: 'Lord of the Flies',
        Year: '1963',
        imdbID: 'tt0057261',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BM2FjM2VlYzgtYzI1OS00MTM2LWJmNjQtNTZkNTJjNzQzYzk5XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
      },
      {
        Title: 'Lord of Illusions',
        Year: '1995',
        imdbID: 'tt0113690',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BNDg1OTc0MDQwNl5BMl5BanBnXkFtZTcwMjQ3NDk0NA@@._V1_SX300.jpg',
      },
      {
        Title: 'Something the Lord Made',
        Year: '2004',
        imdbID: 'tt0386792',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BYmMzYWY4MDUtOWQ4OC00YTY5LWExN2YtYzEyZWM5ZjUyZGQ5XkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_SX300.jpg',
      },
    ];
  }
  getFilms(obj: Search) {
    this.httpService.getFilms(obj.title, obj.year).subscribe((data: any) => {
      this.searchResult = data.Search;
    });
  }

  getInfoFilm(id: string) {
    this.idFilm = id;
    if (!this.mapFilmInfo.has(id)) {
      this.httpService.getShortInfo(id).subscribe((data: any) => {
        this.mapFilmInfo.set(id, data);
        this.openModal = true;
      });
    } else {
      this.openModal = true;
    }
  }
}
