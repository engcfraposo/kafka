import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { BillingStatus } from 'src/dto/billing.dto';

export type BillingDocument = HydratedDocument<Billing>;

@Schema()
export class Billing {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  price: number;

  @Prop({
    type: String,
    required: true,
    enum: BillingStatus,
  })
  status: string;
}

export const BillingtSchema = SchemaFactory.createForClass(Billing);
