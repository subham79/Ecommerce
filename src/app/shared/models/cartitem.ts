import { shop } from "./shop";

export class cartitem {
    static qyantity: number;
    constructor(shop: shop) {
        this.shop = shop;
        // this.grtPrice();
    }
    shop: shop;
    qyantity: number = 1;
    get grtPrice(): number {
        return this.shop.price * this.qyantity;
    }

}