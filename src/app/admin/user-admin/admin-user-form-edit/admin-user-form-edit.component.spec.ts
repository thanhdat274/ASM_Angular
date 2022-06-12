import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserFormEditComponent } from './admin-user-form-edit.component';

describe('AdminUserFormEditComponent', () => {
  let component: AdminUserFormEditComponent;
  let fixture: ComponentFixture<AdminUserFormEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUserFormEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
