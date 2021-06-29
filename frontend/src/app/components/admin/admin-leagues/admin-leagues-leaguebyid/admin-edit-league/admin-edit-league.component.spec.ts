import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditLeagueComponent } from './admin-edit-league.component';

describe('AdminEditLeagueComponent', () => {
  let component: AdminEditLeagueComponent;
  let fixture: ComponentFixture<AdminEditLeagueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEditLeagueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
