export enum BillingStatus {
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
  REJECT = 'REJECT',
}

export class CreateBillingDTO {
  id?: string;
  name: string;
  price: number;
  status: BillingStatus;
}
