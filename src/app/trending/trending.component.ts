import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { getVideosQuery } from '../video.service';

import { Video } from '../Model';


@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})

export class TrendingComponent implements OnInit {

  videos: Video[] = [];
  copiedVideos: Video[] = [];
  lastKey: number = 0;
  observer: any;

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.getVideos();
    this.lastKey = 12;

    this.observer = new IntersectionObserver((entry) => {
      if (entry[0].isIntersecting) {
        let homeBody = document.querySelector(".homeBody");
        for (let i: number = 0; i < 4; i++) {
          if (this.lastKey < this.videos.length) {
            let div = document.createElement("div");
            let video = document.createElement("app-video");
            video.setAttribute("vid", "this.videos[this.lastKey]");
            div.appendChild(video);
            homeBody.appendChild(div);
            this.lastKey++;
          }
        }
      }
    });

    this.observer.observe(document.querySelector(".footer"));
  }

  // sortedVideos(): void {
  //   this.copiedVideos = this.duplicateVideo(this.getVideos());
  //   console.log(this.copiedVideos, this.duplicateVideo(this.getVideos()));

  //   this.copiedVideos.sort(
  //     (a, b) => b.viewCount - a.viewCount
  //   )
  // }

  getVideos(): Video[] {
    this.apollo.watchQuery<any>({
      query: getVideosQuery,
    }).valueChanges.subscribe(result => {
      this.videos = result.data.videos
    })
    console.log(this.videos);
    return this.videos;
  }

  // duplicateVideo(videosCopy: Video[]): Video[] {
  //   const newVideos = Object.assign([], videosCopy);
  //   console.log(newVideos);
  //   return ([...newVideos]);
  // }
}
