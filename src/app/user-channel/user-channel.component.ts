import { Component, OnInit, Input } from '@angular/core';
import { Apollo } from 'apollo-angular';

@Component({
  selector: 'app-user-channel',
  templateUrl: './user-channel.component.html',
  styleUrls: ['./user-channel.component.css']
})

export class UserChannelComponent implements OnInit {

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {

  }

}
