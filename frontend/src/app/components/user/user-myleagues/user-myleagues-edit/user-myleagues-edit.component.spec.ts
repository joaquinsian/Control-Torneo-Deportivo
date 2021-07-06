import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMyleaguesEditComponent } from './user-myleagues-edit.component';

describe('UserMyleaguesEditComponent', () => {
  let component: UserMyleaguesEditComponent;
  let fixture: ComponentFixture<UserMyleaguesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMyleaguesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMyleaguesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
