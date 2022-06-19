import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCategoryFormEditComponent } from './admin-category-form-edit.component';

describe('AdminCategoryFormEditComponent', () => {
  let component: AdminCategoryFormEditComponent;
  let fixture: ComponentFixture<AdminCategoryFormEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminCategoryFormEditComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCategoryFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
