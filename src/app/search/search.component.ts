import { Component, OnInit } from '@angular/core';
import { User, Video } from '../Model';
import { Apollo } from 'apollo-angular';
import { getVideoByTitle } from '../video.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  showDropDown = false;

  newUser: User;
  videos: Video[];
  videosTitle: string[] = [];
  titles = '';
  temp: string;

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
  }

  toggleSearch(): void {
    this.showDropDown = !this.showDropDown;
  }

  searching(event: any): void {
    this.titles = event.target.value;
    this.temp = `%${this.titles}%`;

    this.apollo.watchQuery<any>({
      query: getVideoByTitle, variables: {
        title: this.temp
      }
    }).valueChanges.subscribe(result => {
      this.videos = result.data.getVideosByTitle
      console.log(this.videos);
    })

    console.log(this.temp);
  }

  onClickedOutside(e: Event) {
    this.showDropDown = false;
    console.log(this.showDropDown);
  }
}
