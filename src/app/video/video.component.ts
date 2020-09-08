import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../Model';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  @Input('vid') video: Video;
  constructor() { }

  ngOnInit(): void {
  }

}
