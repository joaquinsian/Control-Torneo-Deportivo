import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMyleaguesComponent } from './user-myleagues.component';

describe('UserMyleaguesComponent', () => {
  let component: UserMyleaguesComponent;
  let fixture: ComponentFixture<UserMyleaguesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMyleaguesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMyleaguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
