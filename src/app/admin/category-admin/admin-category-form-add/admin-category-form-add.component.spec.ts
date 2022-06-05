import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCategoryFormAddComponent } from './admin-category-form-add.component';

describe('AdminCategoryFormAddComponent', () => {
  let component: AdminCategoryFormAddComponent;
  let fixture: ComponentFixture<AdminCategoryFormAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCategoryFormAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCategoryFormAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
