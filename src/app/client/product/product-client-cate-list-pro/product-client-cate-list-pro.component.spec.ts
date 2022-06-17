import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductClientCateListProComponent } from './product-client-cate-list-pro.component';

describe('ProductClientCateListProComponent', () => {
  let component: ProductClientCateListProComponent;
  let fixture: ComponentFixture<ProductClientCateListProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductClientCateListProComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductClientCateListProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
