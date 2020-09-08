import { Component, OnInit, Input } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Video } from '../Model';
import { getVideoOfUserQuery } from '../video.service';

@Component({
  selector: 'app-user-channel-home',
  templateUrl: './user-channel-home.component.html',
  styleUrls: ['./user-channel-home.component.css']
})
export class UserChannelHomeComponent implements OnInit {
  @Input('user') user: any;
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
