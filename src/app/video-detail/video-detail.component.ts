import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { getVideosQuery, getVideoWithIdQuery, insertComment, getCommentsWithIdQuery, addVideosToPlaylist } from './../video.service';

import { Video, Comment } from '../Model';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})

export class VideoDetailComponent implements OnInit {

  video: Video;
  videos: Video[] = [];
  temp: number;
  comments: Comment[] = [];
  description: string = " ";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apollo: Apollo
  ) { }

  ngOnInit(): void {
    this.getVideo();
    this.getVideos();
    this.getVideoComments();
  }

  getVideo(): void {
    this.route.params.subscribe(params => {
      this.temp = +params['id'];
      // console.log(this.temp);

      this.apollo.watchQuery<any>({
        query: getVideoWithIdQuery, variables: {
          video_id: this.temp
        }
      }).valueChanges.subscribe(result => {
        this.video = result.data.getVideo
        console.log(result.data.getVideo);
      })
    });
  }

  getVideos(): void {
    this.apollo.watchQuery<any>({
      query: getVideosQuery,
    }).valueChanges.subscribe(result => {
      this.videos = result.data.videos
    })
  }

  getVideoComments(): void {
    this.route.params.subscribe(params => {
      this.temp = +params['id'];
      //console.log(this.temp);

      this.apollo.watchQuery<any>({
        query: getCommentsWithIdQuery, variables: {
          video_id: this.temp
        }
      }).valueChanges.subscribe(result => {
        this.comments = result.data.getComment;
        //console.log(result.data.getComment);
      })
    });
  }

  insertComment(): void {
    console.log(this.temp);
    this.apollo.mutate({
      mutation: insertComment,
      variables: {
        description: this.description,
        likes: 1,
        userId: 1,
        videoId: this.temp,
      },
      refetchQueries: [{
        query: getCommentsWithIdQuery,
        variables: { video_id: this.temp },
      }],
    }).subscribe()
  }

  addToPlaylist(): void {
    let object: any;
    object = {
      id: this.temp
    }
    this.apollo.mutate({
      mutation: addVideosToPlaylist,
      variables: {
        id: 1,
        videoId: JSON.stringify(object),
      }
    }).subscribe()

    this.router.navigate(['/user/kVuGeTZe32hWCpfyHww217IGLu33/playlists']);
  }

}
