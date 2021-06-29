import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLeaguesLeaguebyidComponent } from './admin-leagues-leaguebyid.component';

describe('AdminLeaguesLeaguebyidComponent', () => {
  let component: AdminLeaguesLeaguebyidComponent;
  let fixture: ComponentFixture<AdminLeaguesLeaguebyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLeaguesLeaguebyidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLeaguesLeaguebyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
