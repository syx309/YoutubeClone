import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Video } from '../Model';
import { getVideoWithIdQuery, UpdateVideo } from './../video.service';


@Component({
  selector: 'app-update-video',
  templateUrl: './update-video.component.html',
  styleUrls: ['./update-video.component.css']
})

export class UpdateVideoComponent implements OnInit {

  video: Video;
  category: string = "Insert Video Category Here!";
  title: string = "Insert Video Title Here!";
  description: string = "Insert Video Description Here!";
  ageRestriction: string = "Is Video Age Restricted?";
  private: string = "Insert Video Private?";
  temp: number;

  constructor(private apollo: Apollo, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.getVideo();
  }

  getVideo(): void {
    this.router.params.subscribe(params => {
      this.temp = +params['videoId'];

      this.apollo.watchQuery<any>({
        query: getVideoWithIdQuery, variables: {
          video_id: this.temp
        }
      }).valueChanges.subscribe(result => {
        this.video = result.data.getVideo
      })
    });

  }

  updateVideo(): void {
    this.apollo.mutate({
      mutation: UpdateVideo,
      variables: {
        id: this.temp,
        category: this.category,
        title: this.title,
        description: this.description,
        ageRestriction: this.ageRestriction,
        private: this.private,
      },
      refetchQueries: [{
        query: getVideoWithIdQuery,
        variables: {
          video_id: this.temp
        },
      }],
    }).subscribe()
  }

}
