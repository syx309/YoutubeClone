import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserChannelVideoComponent } from './user-channel-video.component';

describe('UserChannelVideoComponent', () => {
  let component: UserChannelVideoComponent;
  let fixture: ComponentFixture<UserChannelVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserChannelVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserChannelVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
