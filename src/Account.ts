import { WebUser } from "./WebUser";

class Account {
  private accountId: string;
  private billingAddress: string;
  private isClosed: boolean;
  private openDate: string;
  private closedDate: string | null;
 
  private customer: { id: string; address: string; phone: string; email: string };

  constructor(webUser: WebUser,accountId: string,billingAddress: string,isClosed:boolean = false,
    openDate: string,
    closedDate: string | null = null,
    customerId: string,
    customerAddress: string,
    customerPhone: string,
    customerEmail: string
  ) {
    this.accountId = accountId;
    this.billingAddress = billingAddress;
    this.isClosed = isClosed;
    this.openDate = openDate;
    this.closedDate = closedDate;

    this.customer = { id: customerId, address: customerAddress, phone: customerPhone, email: customerEmail };
  }

  // Getter and Setter for accountId
  public getAccountId(): string {
    return this.accountId;
  }

  // Getter and Setter for billingAddress
  public getBillingAddress(): string {
    return this.billingAddress;
  }

  public setBillingAddress(billingAddress: string): void {
    this.billingAddress = billingAddress;
  }

  // Getter and Setter for isClosed
  public getIsClosed(): boolean {
    return this.isClosed;
  }

  public setIsClosed(isClosed: boolean): void {
    this.isClosed = isClosed;
  }

  // Getter and Setter for openDate
  public getOpenDate(): string {
    return this.openDate;
  }

  public setOpenDate(openDate: string): void {
    this.openDate = openDate;
  }

  // Getter and Setter for closedDate
  public getClosedDate(): string | null {
    return this.closedDate;
  }

  public setClosedDate(closedDate: string | null): void {
    this.closedDate = closedDate;
  }

  // Getter and Setter for customer information
  public getCustomerInfo(): { id: string; address: string; phone: string; email: string } {
    return this.customer;
  }

  public setCustomerInfo(customerId: string, address: string, phone: string, email: string): void {
    this.customer = { id: customerId, address: address, phone: phone, email: email };
  }

  // Method to return a string representation of the account
  public toString(): string {
    return `
      Account | [id: ${this.accountId}, billingAddress: ${this.billingAddress}, isClosed: ${this.isClosed}, 
      openDate: ${this.openDate}, closedDate: ${this.closedDate}, 
      Customer | [id: ${this.customer.id}, address: ${this.customer.address}, phone: ${this.customer.phone}, email: ${this.customer.email}]
    `;
  }
}

export { Account };
