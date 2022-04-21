import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';
import { ShoppingService } from '../services/shopping/shopping.service';
import { shop } from '../shared/models/shop';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  shopping: shop[] = [];
  storeId: any = []
  shop!: shop;

  constructor(private service: ShoppingService, private route: ActivatedRoute, private cartservise: CartService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params.searchItem) {
        this.shopping = this.service.getAll().filter(data => data.name.toLocaleLowerCase().includes(params.searchItem.toLocaleLowerCase()));
        console.log(this.shopping);
      } else if (params.tag) {
        this.shopping = this.service.getallShoptag(params.tag)
      } else {
        this.shopping = this.service.getAll()

      }
    })


  }

  addtocart(id: any) {
    this.cartservise.addtoCart(id)
    // this.cartService.addtoCart(item);

  }

}
