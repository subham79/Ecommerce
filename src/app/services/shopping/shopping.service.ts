import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { shop } from 'src/app/shared/models/shop';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  public datatransfor = new BehaviorSubject<any>({});
  public productList = new BehaviorSubject<any>([]);

  public cartItemList: any = []


  constructor() { }

  getProducts() {
    return this.productList.asObservable();
  }
  addtoCart(product: any) {
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    // this.getTotalPrice();
    console.log(this.cartItemList)
  }
  getAll(): shop[] {
    return [
      {
        id: 1,
        name: "Super Skinny Men Blue Jeans",
        price: 300,
        time: "20-30",
        favorite: false,
        origins: ["indis", "bangladesh"],
        stars: 4.0,
        imageUrl: 'assets/images/jeans.jpg',
        tags: ['classic', 'vintage'],
        discount: '10%',
        discount_price: 330
      },
      {
        id: 2,
        name: "Casuals For Men",
        price: 400,
        time: "20-30",
        favorite: false,
        origins: ["indis", "bangladesh"],
        stars: 4.0,
        imageUrl: 'assets/images/img1.jpg',
        tags: ['classic', 'vintage'],
        discount: '21%',
        discount_price: 484
      },
      {
        id: 3,
        name: "Shoes",
        price: 800,
        time: "20-30",
        favorite: false,
        origins: ["indis", "bangladesh"],
        stars: 4.0,
        imageUrl: 'assets/images/img1.jpg',
        tags: ['classic', 'vintage'],
        discount: '10%',
        discount_price: 880
      },
      {
        id: 3,
        name: "Woven Kanjivaram Pure Silk Saree",
        price: 1200,
        time: "20-30",
        favorite: false,
        origins: ["indis", "bangladesh"],
        stars: 4.0,
        imageUrl: 'assets/images/img3.jpg',
        tags: ['classic', 'vintage'],
        discount: '30%',
        discount_price: 1560
      },
      {
        id: 4,
        name: "Boat 123",
        price: 1000,
        time: "20-30",
        favorite: false,
        origins: ["indis", "bangladesh"],
        stars: 4.0,
        imageUrl: 'assets/images/img4.jpg',
        tags: ['classic', 'vintage'],
        discount: '15%',
        discount_price: 1150
      },
      {
        id: 5,
        name: "Super Skinny Men Blue Jeans",
        price: 1300,
        time: "20-30",
        favorite: false,
        origins: ["indis", "bangladesh"],
        stars: 4.0,
        imageUrl: 'assets/images/jeans.jpg',
        tags: ['classic', 'vintage'],
        discount: '30%',
        discount_price: 1690
      },
      {
        id: 6,
        name: "T-shirt",
        price: 1500,
        time: "20-30",
        favorite: false,
        origins: ["indis", "bangladesh"],
        stars: 4.0,
        imageUrl: 'assets/images/img5.jpg',
        tags: ['classic', 'vintage'],
        discount: '20%',
        discount_price: 1800
      }
    ]
  }

  getFoodbyId(id: number): shop {
    return this.getAll().find(shops => shops.id == id)!;
  }
  getallShoptag(tag: string): shop[] {
    if (tag == 'All') {
      return this.getAll()
    } else {
      return this.getAll().filter(shops => shops.tags?.includes(tag));
    }
  }
}


