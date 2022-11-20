import { Controller, Get, Put } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { KafkaMessage } from '@nestjs/microservices/external/kafka.interface';
import { AppService } from './app.service';
import { BillingStatus, CreateBillingDTO } from './dto/billing.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/healthcheck')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  findBilling() {
    return this.appService.findAllBilling();
  }

  @MessagePattern('buying-create')
  async consumerCreate(@Payload() message: KafkaMessage) {
    const msg = message as unknown as CreateBillingDTO;
    const billing = {
      ...msg,
      status: BillingStatus.PENDING,
    };
    await this.appService.createBilling(billing);
  }
}
