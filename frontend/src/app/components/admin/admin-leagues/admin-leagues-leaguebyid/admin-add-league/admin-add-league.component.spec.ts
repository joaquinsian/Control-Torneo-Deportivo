import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddLeagueComponent } from './admin-add-league.component';

describe('AdminAddLeagueComponent', () => {
  let component: AdminAddLeagueComponent;
  let fixture: ComponentFixture<AdminAddLeagueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddLeagueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
