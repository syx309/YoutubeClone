import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../Model';
import { Apollo } from 'apollo-angular';
import { getVideoOfUserQuery } from '../video.service';

@Component({
  selector: 'app-user-channel-video',
  templateUrl: './user-channel-video.component.html',
  styleUrls: ['./user-channel-video.component.css']
})
export class UserChannelVideoComponent implements OnInit {

  temp: number = 1;
  videos: Video[] = [];
  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.getVideos();
  }

  getVideos(): void {
    this.apollo.watchQuery<any>({
      query: getVideoOfUserQuery,
      variables: {
        userId: this.temp
      }
    }).valueChanges.subscribe(result => {
      this.videos = result.data.getVideosByUserId
    })
  }

}
