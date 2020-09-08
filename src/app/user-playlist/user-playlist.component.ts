import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Playlist } from '../Model';
import { Apollo } from 'apollo-angular';
import { getPlaylistbyUser } from '../video.service';

@Component({
  selector: 'app-user-playlist',
  templateUrl: './user-playlist.component.html',
  styleUrls: ['./user-playlist.component.css']
})
export class UserPlaylistComponent implements OnInit {

  playlists: Playlist[] = [];

  constructor(public auth: AuthService, private apollo: Apollo) { }

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
