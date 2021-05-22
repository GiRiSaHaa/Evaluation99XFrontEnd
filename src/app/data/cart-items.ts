export class CartItems {
    itemId: number;
    name: string;
    qty: number;
    unitPrice: number;
    total: number;
    unitPerCarton: number;
    cartonPrice: number;

    constructor(itemId: number, name: string, qty: number, unitPrice: number, total: number, unitPerCarton: number, cartonPrice: number) {
        this.itemId = itemId;
        this.name = name;
        this.qty = qty;
        this.unitPrice = unitPrice;
        this.total = total;
        this.unitPerCarton = unitPerCarton;
        this.cartonPrice = cartonPrice;
    }
}
