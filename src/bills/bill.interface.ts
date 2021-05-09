// src/items/item.interface.ts

export interface BasicBill{

    name: string;

    price: number;

    category: string;

    image: string;

}

export interface Bill extends BasicBill {
    id: number;
}