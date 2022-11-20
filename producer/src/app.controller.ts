import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
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
  async producer(@Body() body) {
    await this.kafkaProducer.send({
      topic: 'topico-exemplo',
      messages: [{ key: 'pagamentos', value: JSON.stringify(body) }],
    });
    return 'Mensagem publicada';
  }
}
