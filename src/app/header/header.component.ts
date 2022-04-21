import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { ShoppingService } from '../services/shopping/shopping.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public totalItem: number = 0;
  public itemLength: boolean = false;
  constructor(private servise: ShoppingService, private router: Router, private cartservise: CartService) { }

  ngOnInit(): void {
    this.cartservise.getProducts()
      .subscribe(res => {
        this.totalItem = res.length;
      })
    if (this.totalItem === 0) {
      console.log("true");
    }
    else {
      console.log("false");

    }
    console.log(this.totalItem);
  }
  navigate() {
    this.router.navigateByUrl('/cart-page')
  }

}
