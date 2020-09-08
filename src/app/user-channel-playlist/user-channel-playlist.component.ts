import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { getPlaylistbyUser } from '../video.service';
import { Playlist } from '../Model';

@Component({
  selector: 'app-user-channel-playlist',
  templateUrl: './user-channel-playlist.component.html',
  styleUrls: ['./user-channel-playlist.component.css']
})
export class UserChannelPlaylistComponent implements OnInit {

  playlists: Playlist[] = [];

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.getPlaylists();
  }

  getPlaylists(): void {
    this.apollo.watchQuery<any>({
      query: getPlaylistbyUser, variables: {
        userId: 1
      }
    }).valueChanges.subscribe(result => {
      this.playlists = result.data.getUserPlaylists
    })
  }
}
