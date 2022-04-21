import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ShoppingService } from '../services/shopping/shopping.service';
import { cart } from '../shared/cart';
import { cartitem } from '../shared/models/cartitem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
  cart!: cart;
  datalist: any = [];
  public products: any = [];
  public grandTotal !: number;
  dataTrue: boolean = true;
  priceChange: any;
  constructor(private servise: CartService, private serviseshop: ShoppingService) {
    let shop = this.serviseshop.getAll();
    // servise.addtoCart(shop[1]);
    // servise.addtoCart(shop[4]);
    // servise.addtoCart(shop[3]);
  }

  ngOnInit(): void {
    this.setCart();
    this.servise.getProducts()
      .subscribe(res => {
        this.products = res;
        console.log(this.products);
        this.grandTotal = this.servise.getTotalPrice();
        console.log(this.grandTotal);
        // console.log(this.priceChange);
        for (let i = 0; i < this.products.length; i++) {
          // console.log(this.products[i].price + this.products[i].price);
        }
        // this.grandTotal = this.cartService.getTotalPrice();
      })
  }
  setCart() {
    this.cart = this.servise.getCart();
    // this.datalist = this.cart.items[0].shop;
    // console.log("dsdsvhf", this.cart.items);
  }
  removeFromCart(cartitem: cartitem) {
    this.servise.removeFromCart(cartitem.shop.id)
    this.setCart();
  }
  changeQyantity(cartitem: cartitem, qyantityString: string) {
    this.dataTrue = false;
    // console.log(this.products[0].price * Number(qyantityString));
    this.priceChange = this.products[0].price * Number(qyantityString);
    const qyantity = parseInt(qyantityString);
    // this.servise.changeQyantity(cartitem.shop.id, qyantity)
    this.setCart();
  }
  removeItem(item: any) {
    this.servise.removeCartItem(item);
  }
  emptycart() {
    this.servise.removeAllCart();
  }

}
