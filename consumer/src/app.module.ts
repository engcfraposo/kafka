import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Billing, BillingtSchema } from './entity/billing.dto';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://reactorsp:kVgPEsSpHjpu2YrIBXc0rbnll0KvcvUXbKKFd39pRAixXnbo5sND4S9CW6VyfB7rIQfAhhkCVq3NACDboMNUKA==@reactorsp.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@reactorsp@',
    ),
    MongooseModule.forFeature([{ name: Billing.name, schema: BillingtSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
