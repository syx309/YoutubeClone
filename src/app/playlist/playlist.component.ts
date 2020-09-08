import { Component, OnInit, Input } from '@angular/core';
import { Playlist } from '../Model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  @Input('playlist') playlist: Playlist;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  playlistDetails(playlistId: string): void {
    this.router.navigate(['/user/kVuGeTZe32hWCpfyHww217IGLu33/playlists/' + playlistId])
      .then(() => {
        window.location.reload();
      });
  }
}
