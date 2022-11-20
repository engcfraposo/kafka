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

  @Get()
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

  @Put('producer/success/:id')
  async producerSuccess(@Param('id') id: string) {
    console.log(id);
    await this.kafkaProducer.send({
      topic: 'buying-success',
      messages: [{ key: 'billing', value: id }],
    });
    return 'ordem aprovada';
  }

  @Put('producer/failed/:id')
  async producerFailed(@Param('id') id: string) {
    await this.kafkaProducer.send({
      topic: 'buying-failed',
      messages: [{ key: 'billing', value: JSON.stringify({ id }) }],
    });
    return 'ordem recusada';
  }
}
