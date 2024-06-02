import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardsModule } from './boards/boards.module';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { typeORMConfig } from './config/typeorm.config';
import { CommentsModule } from './comments/comments.module';
import { UserModule } from './user/user.module';


@Module({
  imports: [BoardsModule, CommentsModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
