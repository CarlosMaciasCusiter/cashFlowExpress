import { BasicBill, Bill } from './bill.interface';
import { Bills } from './bills.interface';

let bills : Bills = {
    1: {
        id: 1,
        name: "Netflix",
        price: 1799,
        category: "Streaming",
        image: "https://cdn.vox-cdn.com/thumbor/lfpXTYMyJpDlMevYNh0PfJu3M6Q=/39x0:3111x2048/920x613/filters:focal(39x0:3111x2048):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/49901753/netflixlogo.0.0.png"
    },
    2: {
        id: 2,
        name: "Spectrum",
        price: 4999,
        category: "Utility",
        image: "https://www.wbtv.com/resizer/xKpcdXZke8axJ_LIxnT3j7vOM_Q=/1200x600/arc-anglerfish-arc2-prod-raycom.s3.amazonaws.com/public/5DGHFTULXJEGNL5UKBFVOIUVEU.jpg"
    },
    3: {
        id: 3,
        name: "Progressive",
        price: 14999,
        category: "Insurance",
        image: "https://images.contentstack.io/v3/assets/blt62d40591b3650da3/blt72c5ebc95e884f8c/5ca763a5082f61c34628d081/share-opengraph-1200.png"
    },
};

export const findAll = async (): Promise<Bill[]> => Object.values(bills);

export const find = async (id: number): Promise<Bill> => bills[id];

export const create = async (newBill: BasicBill): Promise<Bill> => {
    const id = new Date().valueOf();

    bills[id] = {
        id,
        ...newBill,
    };

    return bills[id];

}

export const update = async (
    id: number,
    billUpdate: BasicBill
): Promise<Bill | null> => {
    const bill = await find(id);

    if (!bill) {
        return null;
    }

    bills[id] = { id, ...billUpdate };

    return bills[id];
}

export const remove = async (id: number): Promise<null | void> => {
    const bill = await find(id);

    if (!bill) {
        return null;
    }

    delete bills[id];
}