import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeData, HomeModel } from '../types/Home.model';
import { SearchModel } from '../types/Search.dto';
import { SongModel } from '../types/Song.dto';

const API_PORT = 4000
const URL = `http://localhost:${API_PORT}`
const END_POINT = {
  getHome: `${URL}/api/home`,
  getSong: `${URL}/api/song`,
  getPlaylist: `${URL}/api/playlist`,
  search: `${URL}/api/search`
}

@Injectable({
  providedIn: 'root'
})
export class SongService {
  data?: HomeModel;

  constructor(private http: HttpClient) { }

  getHomeData(): Observable<HomeModel> {
    return this.http.get<HomeModel>(END_POINT.getHome)
  }

  search(keyword : string): Observable<SearchModel> {
    return this.http.get<SearchModel>(
      `${END_POINT.search}?keyword=${keyword}`
      )
  }

  getSong(songId : string) : Observable<SongModel> {
    return this.http.get<SongModel>(
      `${END_POINT.getSong}?id=${songId}`
    )
  }

  getPlaylist(playlistId: string) : any {
    return this.http.get(
      `${END_POINT.getPlaylist}?id=${playlistId}`
    )
  }
}
