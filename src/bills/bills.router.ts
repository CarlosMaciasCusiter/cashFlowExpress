import express, { Request, Response } from 'express';
import * as BillService from './bills.service';
import { BasicBill, Bill } from './bill.interface';

export const billsRouter = express.Router();

// GET items

billsRouter.get('/', async (req: Request, res: Response) => {
    try {
        const bills: Bill[] = await BillService.findAll();
        res.status(200).send(bills);
    } catch(err) {
        res.status(500).send(err.message);
    }
})

// GET items/:id
billsRouter.get('/:id', async (req: Request, res:Response) => {
    const id: number = parseInt(req.params.id, 10);

    try {
        const bill: Bill = await BillService.find(id);

        if (bill) {
            return res.status(200).send(bill);
        }

        res.status(404).send('bill not found');

    } catch(err) {
        res.status(500).send(err.message);
    }
})

// POST items
billsRouter.post('/', async (req: Request, res: Response) => {
    try {
        const bill: BasicBill = req.body;
        console.log(bill);
        const newBill = await BillService.create(bill);
        res.status(201).json(newBill);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
})

// PUT items/:id
billsRouter.put('/:id', async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);

    try {
        const billUpdate: Bill = req.body;
        const existingBill: Bill = await BillService.find(id)
        
        if (existingBill) {
            const updatedBill = await BillService.update(id, billUpdate);
            return res.status(200).json(updatedBill);
        }
        const newBill = await BillService.create(billUpdate);
        res.status(201).json(newBill);
    } catch(err) {
        res.status(500).send(err.message);
    }
});

// Delete bills/:id
billsRouter.delete('/:id', async (req: Request, res: Response) => {
    try {
        const id: number = parseInt(req.params.id, 10);
        await BillService.remove(id);
        res.sendStatus(204);
    } catch (err) {
        res.status(500).send(err.message);
    }
})