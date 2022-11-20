import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Billing, BillingtSchema } from './entity/billing.dto';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://root:example@mongo:27017/?authMechanism=DEFAULT',
    ),
    MongooseModule.forFeature([{ name: Billing.name, schema: BillingtSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
