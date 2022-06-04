import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductFormAddComponent } from './admin-product-form-add.component';

describe('AdminProductFormAddComponent', () => {
  let component: AdminProductFormAddComponent;
  let fixture: ComponentFixture<AdminProductFormAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProductFormAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProductFormAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
