import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserChannelAboutComponent } from './user-channel-about.component';

describe('UserChannelAboutComponent', () => {
  let component: UserChannelAboutComponent;
  let fixture: ComponentFixture<UserChannelAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserChannelAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserChannelAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
