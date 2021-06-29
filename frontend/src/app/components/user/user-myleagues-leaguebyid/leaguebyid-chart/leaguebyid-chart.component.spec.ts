import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaguebyidChartComponent } from './leaguebyid-chart.component';

describe('LeaguebyidChartComponent', () => {
  let component: LeaguebyidChartComponent;
  let fixture: ComponentFixture<LeaguebyidChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaguebyidChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaguebyidChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
