import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Producer } from 'kafkajs';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('KAFKA_PRODUCER')
    private kafkaProducer: Producer,
  ) {}

  @Get('/healthcheck')
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('producer')
  async producerCreate(@Body() body) {
    await this.kafkaProducer.send({
      topic: 'buying-create',
      messages: [{ key: 'billing', value: JSON.stringify(body) }],
    });
    return 'ordem criada';
  }
}
