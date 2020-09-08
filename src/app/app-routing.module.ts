import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { TrendingComponent } from './trending/trending.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { LibraryComponent } from './library/library.component';
import { HistoryComponent } from './history/history.component';
import { UploadVideoComponent } from './upload-video/upload-video.component';
import { UploaderComponent } from './uploader/uploader.component';
import { UserChannelComponent } from './user-channel/user-channel.component';
import { UserChannelHomeComponent } from './user-channel-home/user-channel-home.component';
import { UserChannelVideoComponent } from './user-channel-video/user-channel-video.component';
import { UserChannelAboutComponent } from './user-channel-about/user-channel-about.component';
import { UserChannelPlaylistComponent } from './user-channel-playlist/user-channel-playlist.component';
import { UpdateVideoComponent } from './update-video/update-video.component';
import { MembershipComponent } from './membership/membership.component';
import { CategoryComponent } from './category/category.component';
import { UserPlaylistComponent } from './user-playlist/user-playlist.component';
import { PlaylistDetailComponent } from './playlist-detail/playlist-detail.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'details/:id', component: VideoDetailComponent },
  { path: 'trending', component: TrendingComponent },
  { path: 'subscription', component: SubscriptionComponent },
  { path: 'library', component: LibraryComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'upload', component: UploadVideoComponent },
  { path: 'uploader', component: UploaderComponent },
  { path: 'membership', component: MembershipComponent },
  { path: 'home/category/:string', component: CategoryComponent },
  { path: 'user/:id/playlists', component: UserPlaylistComponent },
  { path: 'user/:id/playlists/:id', component: PlaylistDetailComponent },
  { path: 'user/:id/channel', component: UserChannelComponent },
  { path: 'user/:id/channel/home', component: UserChannelHomeComponent },
  { path: 'user/:id/channel/about', component: UserChannelAboutComponent },
  { path: 'user/:id/channel/playlist', component: UserChannelPlaylistComponent },
  { path: 'user/:id/channel/video', component: UserChannelVideoComponent },
  { path: 'user/:id/channel/video/:videoId/update', component: UpdateVideoComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  //{ path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
