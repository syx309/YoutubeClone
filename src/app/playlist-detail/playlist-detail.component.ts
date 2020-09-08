import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { getPlaylistbyId, getVideoWithIdQuery } from '../video.service';
import { Playlist, Video } from '../Model';

@Component({
  selector: 'app-playlist-detail',
  templateUrl: './playlist-detail.component.html',
  styleUrls: ['./playlist-detail.component.css']
})
export class PlaylistDetailComponent implements OnInit {

  items: string[] = [];
  result: number[] = [];
  temp: string;
  playlist: Playlist;
  temp2: Playlist;
  video: Video;
  videos: Video[] = [];
  constructor(private route: ActivatedRoute, private apollo: Apollo) { }

  ngOnInit(): void {
    this.getPlaylistbyId();
  }

  getPlaylistbyId(): void {
    this.route.params.subscribe(params => {
      this.temp = params['id'];

      this.apollo.watchQuery<any>({
        query: getPlaylistbyId, variables: {
          id: this.temp
        }
      }).valueChanges.subscribe(result => {
        this.playlist = result.data.getPlaylist;
        // console.log(this.playlist);

        let playlist_video: Array<any> = JSON.parse(this.playlist.videoId)
        this.convertPlaylist(playlist_video);
      })
    });
  }

  convertPlaylist(playlist_video: Array<any>): void {
    console.log(playlist_video);

    var results = playlist_video.map(function (obj) {
      return obj.id;
    });

    this.result = results;
    console.log(results);
    this.loadMultipleVideobyId(results);
  }

  loadMultipleVideobyId(results: number[]): void {
    for (let i = 0; i < results.length; i++) {
      this.apollo.watchQuery<any>({
        query: getVideoWithIdQuery, variables: {
          video_id: results[i]
        }
      }).valueChanges.subscribe(result => {
        this.videos.push(result.data.getVideo)
        console.log(this.videos);
      })
    }
  }
}