import { Component, OnInit } from '@angular/core';
import { ProductCart } from '../../type/products';
import { LocalStorageService } from '../../services/LocalStorage/local-storage.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any;
  cartItemValues: number = 0;
  tien: number = 0;
  constructor(private lsService: LocalStorageService) {
    this.cartItems = [];
  }

  ngOnInit(): void {
    this.onSetCart();
    this.lsService.watchStorage().subscribe(data => {
      this.onSetCart();
    })
  }

  onSetCart() {
    this.cartItems = this.lsService.getItem();
    this.cartItemValues = this.cartItems.reduce((a: any, b: any) => a + b.tien, 0);
  }

  onDelete(_id: any) {
    console.log(_id);
    const cf = window.confirm('Bạn chắc chắn muốn xóa!')
    if (cf) {
      this.cartItems = this.cartItems.filter(
        (item: any) => item._id !== _id
      );
      this.lsService.setCart(this.cartItems)
    }
  }
  onTangSl(_id: string) {
    console.log(_id);
    const existItem = this.cartItems.find((item: any) => item._id === _id);
    console.log(existItem);
    if (existItem) {
      existItem.value += 1;
      existItem.tien = existItem.sale_price * existItem.value;
    }
    this.lsService.setCart(this.cartItems);
  }

  onGiamSl(_id: string) {
    console.log(_id);
    const existItem = this.cartItems.find((item: any) => item._id === _id);
    console.log(existItem);
    if (existItem) {
      existItem.value -= 1;
      if (existItem.value <= 1) {
        existItem.value = 1;
        existItem.tien = existItem.sale_price * existItem.value;
      }
    }
    this.lsService.setCart(this.cartItems);
  }
}
