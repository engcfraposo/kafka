import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBillingDTO } from './dto/billing.dto';
import { Billing, BillingDocument } from './entity/billing.dto';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(Billing.name) private billingModel: Model<BillingDocument>,
  ) {}
  getHello(): string {
    return 'Hello Consumer!';
  }
  createBilling(dto: CreateBillingDTO) {
    const billing = new this.billingModel(dto);
    return billing.save();
  }

  findAllBilling() {
    return this.billingModel.find().exec();
  }
}
