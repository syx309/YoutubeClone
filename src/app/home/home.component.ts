import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { getVideosQuery } from '../video.service';

import { Video } from '../Model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  videos: Video[] = [];
  lastKey: number = 0;
  observer: any;

  constructor(
    private route: ActivatedRoute,
    private apollo: Apollo) { }

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

  getVideos(): void {
    this.apollo.watchQuery<any>({
      query: getVideosQuery,
    }).valueChanges.subscribe(result => {
      this.videos = result.data.videos
    })
  }
}
