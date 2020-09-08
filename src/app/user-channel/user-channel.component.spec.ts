import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserChannelComponent } from './user-channel.component';

describe('UserChannelComponent', () => {
  let component: UserChannelComponent;
  let fixture: ComponentFixture<UserChannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserChannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
