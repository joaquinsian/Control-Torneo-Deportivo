import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLeaguesComponent } from './admin-leagues.component';

describe('AdminLeaguesComponent', () => {
  let component: AdminLeaguesComponent;
  let fixture: ComponentFixture<AdminLeaguesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLeaguesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLeaguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
