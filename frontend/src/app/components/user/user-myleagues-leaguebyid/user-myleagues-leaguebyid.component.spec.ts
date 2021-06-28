import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMyleaguesLeaguebyidComponent } from './user-myleagues-leaguebyid.component';

describe('UserMyleaguesLeaguebyidComponent', () => {
  let component: UserMyleaguesLeaguebyidComponent;
  let fixture: ComponentFixture<UserMyleaguesLeaguebyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMyleaguesLeaguebyidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMyleaguesLeaguebyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
