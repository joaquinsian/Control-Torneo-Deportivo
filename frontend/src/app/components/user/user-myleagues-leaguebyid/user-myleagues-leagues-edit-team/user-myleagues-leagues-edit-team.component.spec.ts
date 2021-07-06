import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMyleaguesLeaguesEditTeamComponent } from './user-myleagues-leagues-edit-team.component';

describe('UserMyleaguesLeaguesEditTeamComponent', () => {
  let component: UserMyleaguesLeaguesEditTeamComponent;
  let fixture: ComponentFixture<UserMyleaguesLeaguesEditTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMyleaguesLeaguesEditTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMyleaguesLeaguesEditTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
