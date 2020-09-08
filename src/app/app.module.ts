import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ClickOutsideModule } from 'ng-click-outside';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { MembershipComponent } from './membership/membership.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { TrendingComponent } from './trending/trending.component';
import { SearchComponent } from './search/search.component';
import { UserChannelComponent } from './user-channel/user-channel.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { LibraryComponent } from './library/library.component';
import { HistoryComponent } from './history/history.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { UploadVideoComponent } from './upload-video/upload-video.component';
import { VideoComponent } from './video/video.component';
import { CommentComponent } from './comment/comment.component';
import { UserChannelVideoComponent } from './user-channel-video/user-channel-video.component';
import { VideoEditComponent } from './video-edit/video-edit.component';
import { UpdateVideoComponent } from './update-video/update-video.component';
import { UserChannelHomeComponent } from './user-channel-home/user-channel-home.component';
import { CategoryComponent } from './category/category.component';
import { UserChannelAboutComponent } from './user-channel-about/user-channel-about.component';
import { UserPlaylistComponent } from './user-playlist/user-playlist.component';
import { PlaylistDetailComponent } from './playlist-detail/playlist-detail.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { UserChannelPlaylistComponent } from './user-channel-playlist/user-channel-playlist.component';
import { DropzoneDirective } from './dropzone.directive';
import { UploaderComponent } from './uploader/uploader.component';


const firebaseConfig = {
  apiKey: "AIzaSyDKD3tU-4nhZuc3NCJm7k4T4SjdXwpMw-4",
  authDomain: "clone-715b2.firebaseapp.com",
  databaseURL: "https://clone-715b2.firebaseio.com",
  projectId: "clone-715b2",
  storageBucket: "clone-715b2.appspot.com",
  messagingSenderId: "712030248076",
  appId: "1:712030248076:web:b64b9519a33f94adb16fa9"
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    MembershipComponent,
    SubscriptionComponent,
    TrendingComponent,
    SearchComponent,
    UserChannelComponent,
    VideoDetailComponent,
    LibraryComponent,
    HistoryComponent,
    UploadVideoComponent,
    VideoComponent,
    CommentComponent,
    UserChannelVideoComponent,
    VideoEditComponent,
    UpdateVideoComponent,
    UserChannelHomeComponent,
    CategoryComponent,
    UserChannelAboutComponent,
    UserPlaylistComponent,
    PlaylistDetailComponent,
    PlaylistComponent,
    UserChannelPlaylistComponent,
    DropzoneDirective,
    UploaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, GraphQLModule, HttpClientModule, // storage
    FormsModule,
    ClickOutsideModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
