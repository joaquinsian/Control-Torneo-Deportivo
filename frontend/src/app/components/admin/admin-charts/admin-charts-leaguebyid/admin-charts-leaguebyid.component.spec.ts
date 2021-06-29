import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminChartsLeaguebyidComponent } from './admin-charts-leaguebyid.component';

describe('AdminChartsLeaguebyidComponent', () => {
  let component: AdminChartsLeaguebyidComponent;
  let fixture: ComponentFixture<AdminChartsLeaguebyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminChartsLeaguebyidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminChartsLeaguebyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
