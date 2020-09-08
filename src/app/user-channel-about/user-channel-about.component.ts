import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-user-channel-about',
  templateUrl: './user-channel-about.component.html',
  styleUrls: ['./user-channel-about.component.css']
})
export class UserChannelAboutComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

}
