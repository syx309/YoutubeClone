import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoEditComponent } from './video-edit.component';

describe('VideoEditComponent', () => {
  let component: VideoEditComponent;
  let fixture: ComponentFixture<VideoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
