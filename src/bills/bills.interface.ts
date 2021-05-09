// src/items/items.interface.ts

import { Bill } from './bill.interface';

export interface Bills {
    [key: number]: Bill;
}