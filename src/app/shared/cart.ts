import { cartitem } from "./models/cartitem";

export class cart {
    items: cartitem[] = [];

    get totalprice(): number {
        let totalprice = 0;
        this.items.forEach(item => {
            totalprice += item.grtPrice;

        });
        return totalprice;
    }
}