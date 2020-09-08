import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../Model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { getVideosQuery, DeleteVideoById } from './../video.service';

@Component({
  selector: 'app-video-edit',
  templateUrl: './video-edit.component.html',
  styleUrls: ['./video-edit.component.css']
})

export class VideoEditComponent implements OnInit {

  @Input('vid') video: Video;
  constructor(private apollo: Apollo, private router: Router) { }

  ngOnInit(): void {
  }

  updateVideo(videoId: number): void {
    this.router.navigate(['/user/kVuGeTZe32hWCpfyHww217IGLu33/channel/video/' + videoId + '/update']);
  }

  deleteVideo(videoId: number): void {
    this.apollo.mutate({
      mutation: DeleteVideoById,
      variables: {
        id: videoId
      },
      refetchQueries: [{
        query: getVideosQuery,
        variables: { repoFullName: 'apollographql/apollo-client' },
      }],
    }).subscribe()
  }
}
