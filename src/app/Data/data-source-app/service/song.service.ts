import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeData, HomeModel } from '../types/Home.model';
import { SearchModel } from '../types/Search.dto';
import { SongModel } from '../types/Song.dto';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  data?: HomeModel;

  constructor(private http: HttpClient) { }

  getHomeData(): Observable<HomeModel> {
    return this.http.get<HomeModel>('http://localhost:8000/api/home')
  }

  search(keyword : String): Observable<SearchModel> {
    return this.http.get<SearchModel>(
      `http://localhost:8000/api/search?keyword=${keyword}`
      )
  }

  getSong(songId : String) : Observable<SongModel> {
    return this.http.get<SongModel>(
      `http://localhost:8000/api/song?id=${songId}`
    )
  }
}
