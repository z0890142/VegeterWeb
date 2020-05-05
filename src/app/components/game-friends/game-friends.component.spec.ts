import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameFriendsComponent } from './game-friends.component';

describe('GameFriendsComponent', () => {
  let component: GameFriendsComponent;
  let fixture: ComponentFixture<GameFriendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameFriendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameFriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
