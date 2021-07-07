import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAllUsersEditComponent } from './admin-all-users-edit.component';

describe('AdminAllUsersEditComponent', () => {
  let component: AdminAllUsersEditComponent;
  let fixture: ComponentFixture<AdminAllUsersEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAllUsersEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAllUsersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
