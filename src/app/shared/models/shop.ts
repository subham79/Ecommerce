export class shop {
    id!: number;
    price!: number;
    name!: string;
    favorite: boolean = false;
    stars: number = 0;
    tags?: string[];
    imageUrl!: string;
    time!: string;
    origins!: string[];
    discount!: string;
    discount_price!: number;

}