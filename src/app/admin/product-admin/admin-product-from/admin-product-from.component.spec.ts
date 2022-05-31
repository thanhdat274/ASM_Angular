import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductFromComponent } from './admin-product-from.component';

describe('AdminProductFromComponent', () => {
  let component: AdminProductFromComponent;
  let fixture: ComponentFixture<AdminProductFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProductFromComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProductFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
