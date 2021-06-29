import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaguebyidJourneyComponent } from './leaguebyid-journey.component';

describe('LeaguebyidJourneyComponent', () => {
  let component: LeaguebyidJourneyComponent;
  let fixture: ComponentFixture<LeaguebyidJourneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaguebyidJourneyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaguebyidJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
