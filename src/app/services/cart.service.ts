import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { cart } from '../shared/cart';
import { cartitem } from '../shared/models/cartitem';
import { shop } from '../shared/models/shop';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: cart = new cart()
  public cartItemList: any = []
  public productList = new BehaviorSubject<any>([]);
  firstId: any;
  filtered: any = [];
  secondtId: any;

  constructor() { }
  // addtoCart(shop: shop): void {
  //   let cartitems = this.cart.items.find(item => item.shop.id === shop.id)
  //   if (cartitems) {
  //     this.changeQyantity(shop.id, cartitem.qyantity + 1)
  //     return;
  //   }
  //   this.cart.items.push(new cartitem(shop))
  // }
  addtoCart(product: any) {
    console.log("11su", product.id);
    this.cartItemList.push(product);
    const arr: any = this.cartItemList;
    const ids = arr.map((o: { id: any; }) => o.id)
    this.filtered = arr.filter(({ id }: any, index: number) => !ids.includes(id, index + 1))
    console.log("das", this.filtered);

    // let id1 = this.cartItemList;
    // for (let i = 0; i < this.cartItemList.length; i++) {
    //   this.firstId = this.cartItemList[i].id;
    //   console.log("me", this.firstId);

    // }

    for (let i = 0; i < this.filtered.length; i++) {
      // console.log("me1", this.filtered[i].id);
      this.secondtId = this.filtered[i].id;
      console.log("second", this.secondtId);

    }
    // console.log("id1", this.cartItemList);
    // console.log("id2", this.filtered);
    if (product.id === this.firstId) {
      console.log("true");
    }
    // console.log("sgvsg", this.filtered);
    this.productList.next(this.filtered);
    // this.getTotalPrice();
    // console.log(this.cartItemList);
  }
  removeFromCart(shopId: number): void {
    this.cart.items = this.cart.items.filter(item => item.shop.id != shopId)
  }

  changeQyantity(qyantity: number, shopId: number) {
    let cartitem = this.cart.items.find(item => item.shop.id);
    if (!cartitem) return;
    cartitem.qyantity = qyantity;
  }
  getCart(): cart {
    return this.cart;
  }
  getProducts() {
    return this.productList.asObservable();
  }
  removeCartItem(product: any) {
    this.filtered.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.filtered.splice(index, 1);
      }
    })
    this.productList.next(this.filtered);
  }
  removeAllCart() {
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }
  getTotalPrice(): number {
    let grandTotal = 0;
    this.filtered.map((a: any) => {
      // console.log(a, "a");
      grandTotal += a.price;
      console.log(this.cartItemList, "cart");

    })
    return grandTotal;
  }

}
