
import { LineItem } from "./LineItem";
class ShoppingCart {

    private lineItems: LineItem[] = [];
    private created: string;

    constructor( created: string, lineItems: LineItem[] = []) {;
        this.created = created;
        this.lineItems = lineItems;
    }

    public getCreated(): string {
        return this.created;
    }

    public setCreated(created: string): void {
        this.created = created;
    }

    public getLineItems(): LineItem[] {
        return this.lineItems;
    }

    public setLineItems(lineItems: LineItem[]): void {
        this.lineItems = lineItems;
    }

    public toString(): string {
    return `Created : ${this.created} LineItem : ${this.lineItems}`
}
}
export {ShoppingCart}