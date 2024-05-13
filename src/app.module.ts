import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardsModule } from './boards/boards.module';
import { CommentsModule } from './comments/comments.module';


@Module({
  imports: [BoardsModule, CommentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
