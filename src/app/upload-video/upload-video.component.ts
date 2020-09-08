import { Component, OnInit, Input } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Router } from '@angular/router';
import { getVideosQuery, UploadNewVideo } from './../video.service';

@Component({
  selector: 'app-upload-video',
  templateUrl: './upload-video.component.html',
  styleUrls: ['./upload-video.component.css']
})

export class UploadVideoComponent implements OnInit {

  @Input('vid') videoUrl: string;
  @Input('comp') thumbnailUrl: string;

  category: string = "";
  description: string = "";
  title: string = "";
  ageRestriction: string = "";
  viewCount: number;
  likes: number;
  dislikes: number;
  private: string = "";

  constructor(private apollo: Apollo, private router: Router) { }

  ngOnInit(): void {
  }

  insertVideo(): void {
    this.apollo.mutate({
      mutation: UploadNewVideo,
      variables: {
        category: this.category,
        description: this.description,
        title: this.title,
        ageRestriction: this.ageRestriction,
        viewCount: this.viewCount,
        uploadDate: new Date(),
        userId: 1,
        video: this.videoUrl,
        thumbnail: this.thumbnailUrl,
        likes: 10000,
        dislikes: 100,
        private: this.private,
      },
      refetchQueries: [{
        query: getVideosQuery,
        variables: { repoFullName: 'apollographql/apollo-client' },
      }],
    }).subscribe()

    this.router.navigate(['/user/kVuGeTZe32hWCpfyHww217IGLu33/channel/video']);
  }
}
