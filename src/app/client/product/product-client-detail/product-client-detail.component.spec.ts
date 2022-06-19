import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductClientDetailComponent } from './product-client-detail.component';

describe('ProductClientDetailComponent', () => {
  let component: ProductClientDetailComponent;
  let fixture: ComponentFixture<ProductClientDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductClientDetailComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductClientDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
