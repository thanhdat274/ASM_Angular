import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserFormAddComponent } from './admin-user-form-add.component';

describe('AdminUserFormAddComponent', () => {
  let component: AdminUserFormAddComponent;
  let fixture: ComponentFixture<AdminUserFormAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminUserFormAddComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserFormAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
