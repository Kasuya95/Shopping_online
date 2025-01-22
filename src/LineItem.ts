import { Product } from "./Product";
class LineItem {
    private product: Product;
    private quantity: number;
    private price: number;

    constructor(quantity: number, price: number, product: Product) {
        this.quantity = quantity;
        this.price = price;
        this.product = product;
    }

    public getProduct(): Product {
        return this.product;
    }

    public getQuantity(): number {
        return this.quantity;
    }

    public getPrice(): number {
        return this.price;
    }

    public calcTotal(): number {
        return this.quantity * this.price;
    }

    public toString(): string {
        return `LineItem | Product: ${this.getProduct()}, Quantity: ${this.quantity}, Price: ${this.price}`;
    }
}
export {LineItem}