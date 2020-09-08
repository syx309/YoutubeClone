import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserChannelHomeComponent } from './user-channel-home.component';

describe('UserChannelHomeComponent', () => {
  let component: UserChannelHomeComponent;
  let fixture: ComponentFixture<UserChannelHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserChannelHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserChannelHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
