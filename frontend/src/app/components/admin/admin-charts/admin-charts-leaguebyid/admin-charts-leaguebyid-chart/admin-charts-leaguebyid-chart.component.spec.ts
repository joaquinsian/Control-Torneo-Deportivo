import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminChartsLeaguebyidChartComponent } from './admin-charts-leaguebyid-chart.component';

describe('AdminChartsLeaguebyidChartComponent', () => {
  let component: AdminChartsLeaguebyidChartComponent;
  let fixture: ComponentFixture<AdminChartsLeaguebyidChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminChartsLeaguebyidChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminChartsLeaguebyidChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
