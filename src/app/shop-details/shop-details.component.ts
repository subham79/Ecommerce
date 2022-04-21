import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { ShoppingService } from '../services/shopping/shopping.service';
import { shop } from '../shared/models/shop';

@Component({
  selector: 'app-shop-details',
  templateUrl: './shop-details.component.html',
  styleUrls: ['./shop-details.component.scss']
})
export class ShopDetailsComponent implements OnInit {
  shop!: shop;
  cartData: any;
  constructor(private route: ActivatedRoute, private servise: ShoppingService, private cartservise: CartService, private router: Router) {
    route.params.subscribe((params) => {
      if (params.id)
        this.shop = servise.getFoodbyId(params.id)
      this.cartData = this.shop;
      // console.log("shop", this.shop);

    })
  }

  ngOnInit(): void {
  }
  addtoCart() {
    this.cartservise.addtoCart(this.shop)
    this.router.navigateByUrl('/cart-page')
    localStorage.setItem("data", this.cartData);
  }

}
