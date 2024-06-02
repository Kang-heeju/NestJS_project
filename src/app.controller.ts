import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/:id")
  getHello(@Param("id") id: string) {
    console.log(id);
    // return this.appService.getHello();
  }

  @Post()
  getPost(@Body() body: any) {
    console.log(body);
  }
}
