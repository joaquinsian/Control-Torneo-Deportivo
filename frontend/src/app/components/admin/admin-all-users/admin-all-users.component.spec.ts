import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAllUsersComponent } from './admin-all-users.component';

describe('AdminAllUsersComponent', () => {
  let component: AdminAllUsersComponent;
  let fixture: ComponentFixture<AdminAllUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAllUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAllUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
