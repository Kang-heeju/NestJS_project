import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { BoardsModule } from './boards/boards.module';
import { TestingModule } from './testing/testing.module';


@Module({
  imports: [CatsModule, BoardsModule, TestingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
