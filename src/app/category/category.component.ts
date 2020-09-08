import { Component, OnInit } from '@angular/core';
import { Video } from '../Model';
import { ActivatedRoute } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';
import { getVideosByCategory } from '../video.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  videos: Video[] = [];
  lastKey: number = 0;
  observer: any;
  temp: string;
  title: string;

  constructor(
    private route: ActivatedRoute,
    private apollo: Apollo) { }

  ngOnInit(): void {
    this.getVideosByCategory();
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

  getVideosByCategory(): void {
    this.route.paramMap.subscribe(params => {
      this.temp = params.get("string");
      console.log(this.temp);
      this.title = this.temp.charAt(0).toUpperCase() + this.temp.slice(1);

      this.apollo.watchQuery<any>({
        query: getVideosByCategory,
        variables: {
          category: this.temp
        }
      }).valueChanges.subscribe(result => {
        this.videos = result.data.getTrendingVideosCategory;
      })
    });

  }
}
