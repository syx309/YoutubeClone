import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserChannelPlaylistComponent } from './user-channel-playlist.component';

describe('UserChannelPlaylistComponent', () => {
  let component: UserChannelPlaylistComponent;
  let fixture: ComponentFixture<UserChannelPlaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserChannelPlaylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserChannelPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
