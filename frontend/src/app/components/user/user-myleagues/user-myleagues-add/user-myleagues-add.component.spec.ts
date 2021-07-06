import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMyleaguesAddComponent } from './user-myleagues-add.component';

describe('UserMyleaguesAddComponent', () => {
  let component: UserMyleaguesAddComponent;
  let fixture: ComponentFixture<UserMyleaguesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMyleaguesAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMyleaguesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
