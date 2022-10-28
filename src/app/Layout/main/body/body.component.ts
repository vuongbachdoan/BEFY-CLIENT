import { Component, OnInit } from '@angular/core';
import { SongService } from 'src/app/Data/data-source-app/service/song.service';
import { HomeData } from 'src/app/Data/data-source-app/types/Home.model';
import { FormControl } from '@angular/forms';
import { SearchModel } from 'src/app/Data/data-source-app/types/Search.dto';
import { SongModel } from 'src/app/Data/data-source-app/types/Song.dto';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  homeData? : HomeData
  searchString?: string;
  searchData?: SearchModel;
  isVisible = false;
  songLink?: string;

  constructor(private songService: SongService) { }

  ngOnInit(): void {
    this.songService.getHomeData()
      .subscribe(
        res => console.log(res.data.items)
      )
  }

  requestSearch(): void {
    this.isVisible = true;
    console.log(this.searchString)
    this.songService.search(this.searchString ?? "")
     .subscribe(
      res => {
        this.searchData = res
      }
     )
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  handleOk(): void {
    this.isVisible = false;
  }

  play(songId: string): void {
    this.songService.getSong(songId)
      .subscribe(
        res => this.songLink = res.data['128']
      )
  }
}
